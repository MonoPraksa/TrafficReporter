import { Component, OnInit, ElementRef  } from '@angular/core';
declare var google:any;

import { ReportService } from './report.service';
import { CommunicationService} from './communication.service';
import { CausesService } from './causes.service';

import { Report } from './report';
import { Markers } from './marker';
import { Rectangle} from './rectangle';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  filter: number = 63; // contains settings for filter
  lat: number;        //  <-.
  lng: number;        //  <-+ starting coordinates
  marker: Markers;    //  <---- handles all markers representing different reports and current location
  tracker: any;       // timer used when tracking is enabled
  throttler: boolean = false;  // used to throttle request to api when route is set
  directionBounds: Rectangle[] = [];
  directionsFromGoogle: any;
 public map:any;            //  for google map instance handling
 public directionsDisplay: any;   // for displaying route

  constructor(private elementRef: ElementRef,
  private reportService: ReportService,
  private communicationService: CommunicationService,
  private causesService: CausesService) {
    let selfRef = this;
    this.communicationService.activator$.subscribe(
      data =>{
        setTimeout(this.updateReports,200,this,false);
      }
    );

    this.communicationService.directions$.subscribe(
      data =>{
      let myRoute = data.routes[0].legs[0];
      this.directionsFromGoogle = myRoute;

      this.directionBounds.length=0;      // clears all bounds from last query
      let currentBound=0;                 // number of current boundary
      let currentLat=myRoute.start_location.lat();    
      let currentLng=myRoute.start_location.lng();

      selfRef.directionBounds[0] = new Rectangle;
      selfRef.directionBounds[0].greaterX=selfRef.directionBounds[currentBound].lesserX=currentLng;     
      selfRef.directionBounds[0].greaterY=selfRef.directionBounds[currentBound].lesserY=currentLat;  

      myRoute.steps.forEach(function(step){
        step.path.forEach(function(part){
            if(selfRef.directionBounds[currentBound].greaterX<part.lng())
              selfRef.directionBounds[currentBound].greaterX=part.lng()    
            if(selfRef.directionBounds[currentBound].greaterY<part.lat())
              selfRef.directionBounds[currentBound].greaterY=part.lat()         
            if(selfRef.directionBounds[currentBound].lesserX>part.lng())
              selfRef.directionBounds[currentBound].lesserX=part.lng()                      
            if(selfRef.directionBounds[currentBound].lesserY>part.lat())
              selfRef.directionBounds[currentBound].lesserY=part.lat()
            if((part.lng()-currentLng)*(part.lng()-currentLng)+(part.lat()-currentLat)*(part.lat()-currentLat)>0.09){
              ++currentBound;
              selfRef.directionBounds[currentBound] = new Rectangle;
              selfRef.directionBounds[currentBound].greaterX=selfRef.directionBounds[currentBound].lesserX=part.lng();     
              selfRef.directionBounds[currentBound].greaterY=selfRef.directionBounds[currentBound].lesserY=part.lat();
              currentLat=part.lat();
              currentLng=part.lng();
            }
        })
      });
    //  console.log(selfRef.directionBounds);
    selfRef.throttler=false;
      setTimeout(function(){selfRef.throttler=true;},5000);
     
      this.communicationService.directionsStateInUse=true;
      this.directionsDisplay.setDirections(data);
      }
    );

    this.communicationService.filter$.subscribe(
      data =>{
        this.filter = data;
      }
    );

    this.communicationService.clearRoute$.subscribe(
      data=>{
        this.communicationService.directionsStateInUse=data;
        this.directionsDisplay.set('directions',null);
      }
    )

}


initMap(position):void {
  if(position.code){
    this.communicationService.geolocationDenied=true;
    position.coords = {latitude:46, longitude: 16};
    alert("We could not get your location, which limits website functionality\n Reason: "+position.message);
    console.log(position.message);
  }
 
  let selfRef = this;     
  
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map = new google.maps.Map(this.elementRef.nativeElement.children[0], {
          zoom: 14,
          center: this,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        });

        
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsDisplay.setMap(this.map);

        this.marker = new Markers(this.causesService);


        this.map.addListener('idle', function() {  
          selfRef.communicationService.setBounds(selfRef.map.getBounds());
          selfRef.updateReports(selfRef,false);
      });

      setInterval(this.updateReports,15000, this, true);
     
 }



updatePosition(self: any){
  if(self.tracker && self.map.zoom<16)
    self.map.setZoom(16);
  navigator.geolocation.getCurrentPosition(self.setPosition.bind(self));
}

setPosition(position){
  this.lat = position.coords.latitude;
  this.lng = position.coords.longitude;
  this.map.setCenter(this);
}

trackingToggle(){                     // set zoom level of map and centers map on current location every second
  if(!this.tracker){
    this.tracker = setInterval( this.updatePosition,2000, this);
  }
  else{
    clearInterval(this.tracker); this.tracker=undefined;
  }
}

directionToggle(){
  this.communicationService.directionsStateHidden=!this.communicationService.directionsStateHidden;
  this.communicationService.menuStateHidden=true;
}

menuToggle(){
  this.communicationService.menuStateHidden=!this.communicationService.menuStateHidden;
  this.communicationService.directionsStateHidden=true;
}

updateReports(selfRef: any, timerCalled: boolean):void{
 //console.log("!tracker "+!selfRef.tracker+";\nthrotller "+selfRef.throttler+";\n!timerCalled "+!timerCalled);
  if(!selfRef.tracker && selfRef.throttler && !timerCalled){
    return;
  }

  let MapBounds = selfRef.map.getBounds();
  let bounds = [];
  if(selfRef.communicationService.directionsStateInUse){
    selfRef.directionBounds.forEach(function(bound){
      if((MapBounds.b.b<bound.greaterX && MapBounds.f.b<bound.greaterY )
        &&( MapBounds.b.f>bound.lesserX && MapBounds.f.f>bound.lesserY)){
          bounds[bounds.length]={b:{b:bound.lesserX,f:bound.greaterX},
          f:{b:bound.lesserY,f:bound.greaterY}};
        }
    });

  //  console.log(bounds);
    selfRef.marker.empty();     // clear old markers
    bounds.forEach(function(bound){      
      selfRef.reportService.getReports(bound.b.b, bound.f.b, bound.b.f, bound.f.f,selfRef.filter)    // get reports
      .then(report => {                           
        report.forEach(function(rep) {             
         selfRef.marker.create(selfRef.map,rep);    // add new markers
        });
       });
    })

  }
  else{
    selfRef.reportService.getReports(MapBounds.b.b, MapBounds.f.b, MapBounds.b.f, MapBounds.f.f,selfRef.filter)    // get reports
    .then(report => {                            
      selfRef.marker.empty();                    // remove old markers
      report.forEach(function(rep) {            
       selfRef.marker.create(selfRef.map,rep);   // and add new ones
      });
     });
  }

   
}

    ngOnInit(): void {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.initMap.bind(this),this.initMap.bind(this));
        }
        else{
          let position = {coords:{latitude:46, longitude: 16}};
          this.initMap.bind(position);
        }
         // console.log(this.elementRef);
  }
}