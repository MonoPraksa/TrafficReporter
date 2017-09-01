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
  filter: number = 63; // sadrži postavke filtra po cause
  lat: number;        //  <-.
  lng: number;        //  <-+ trenutne kordinate
  marker: Markers;    //  
  tracker: any;
  navigationDisabled: boolean= false;
  directionEnable: boolean;
  directionBounds: Rectangle = new Rectangle;  
 public map:any;            //  za dohvaćanje google map instance
 public directionsDisplay: any;   // za prikazivanje rute
 public search: any;        //  za dohvaćanje google searchbox instance
 reports: Report[] = [];

  constructor(private elementRef: ElementRef,
  private reportService: ReportService,
  private communicationService: CommunicationService,
  private causesService: CausesService) {
    this.communicationService.activator$.subscribe(
      data =>{
        setTimeout(this.updateReports,200,this);
      }
    );

    this.communicationService.directions$.subscribe(
      data =>{
      let myRoute = data.routes[0].legs[0];
      this.directionBounds.greaterX=this.directionBounds.lesserX=myRoute.steps[0].start_location.lng();
      this.directionBounds.greaterY=this.directionBounds.lesserY=myRoute.steps[0].start_location.lat();

      for(let i=1;i<myRoute.steps.length;i++){
        if(this.directionBounds.greaterX<myRoute.steps[i].start_location.lng())
          this.directionBounds.greaterX=myRoute.steps[i].start_location.lng();
        if(this.directionBounds.lesserX>myRoute.steps[i].start_location.lng())
          this.directionBounds.lesserX=myRoute.steps[i].start_location.lng();
        if(this.directionBounds.greaterY<myRoute.steps[i].start_location.lat())
          this.directionBounds.greaterY=myRoute.steps[i].start_location.lat();
        if(this.directionBounds.lesserY>myRoute.steps[i].start_location.lat())
          this.directionBounds.lesserY=myRoute.steps[i].start_location.lat();
        if(this.directionBounds.greaterX<myRoute.steps[i].end_location.lng())
          this.directionBounds.greaterX=myRoute.steps[i].end_location.lng();
        if(this.directionBounds.lesserX>myRoute.steps[i].end_location.lng())
          this.directionBounds.lesserX=myRoute.steps[i].end_location.lng();
        if(this.directionBounds.greaterY<myRoute.steps[i].end_location.lat())
          this.directionBounds.greaterY=myRoute.steps[i].end_location.lat();
        if(this.directionBounds.lesserY>myRoute.steps[i].end_location.lat())
          this.directionBounds.lesserY=myRoute.steps[i].end_location.lat();
      }
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
  /*let position = {coords:{latitude:46, longitude: 16}}; */
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
        //this.map = new google.maps.Map(document.getElementById('map'),{
          zoom: 14,
          center: this,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        });
       /* this.search = new google.maps.places.SearchBox(this.elementRef.nativeElement.children[1]);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.elementRef.nativeElement.children[1]); */
        
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsDisplay.setMap(this.map);

        this.marker = new Markers(this.causesService);

        this.map.addListener('idle', function() {  
          selfRef.communicationService.setBounds(selfRef.map.getBounds());
          selfRef.updateReports(selfRef);
      });

      setInterval(this.updateReports,10000, this);
     /*   this.search.addListener('places_changed',function(){     // povezuje searchbox s mapom
           let places = selfRef.search.getPlaces();

          if (places.length == 0) {
            return;
          }

        let bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
        selfRef.map.fitBounds(bounds);
        });  */
         
    //     this.reportService.delete("3f1b1071-44e3-4551-870a-3d6a2d7e0534");  - dokazano radi
  /*   this.reportService.getReports()
         .then(report => {
           report.forEach(function(rep) {
            selfRef.marker.create(selfRef.map,rep);
           // console.log(rep); 
           });

    */
  //   
 }



updatePosition(self: any){
  navigator.geolocation.getCurrentPosition(self.setPosition.bind(self));
}

setPosition(position){
  this.lat = position.coords.latitude;
  this.lng = position.coords.longitude;
  this.map.setCenter(this);
}

trackingToggle(){                     // set zoom level of map and centers map on current location every second
  if(!this.tracker){
    this.map.setZoom(16);
    this.tracker = setInterval( this.updatePosition,1000, this);
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

updateReports(selfRef: any):void{
  let bounds;
  if(selfRef.communicationService.directionsStateInUse)
    bounds = {b:{b:selfRef.directionBounds.lesserX-0.0005,f:selfRef.directionBounds.greaterX+0.0005},
              f:{b:selfRef.directionBounds.lesserY-0.0005,f:selfRef.directionBounds.greaterY+0.0005}}
  else 
    bounds = selfRef.map.getBounds();
   selfRef.reportService.getReports(bounds.b.b, bounds.f.b, bounds.b.f, bounds.f.f,selfRef.filter)    // dohvati reportove 
   .then(report => {                            // te obriši
     selfRef.marker.empty();                    // stare markere
     report.forEach(function(rep) {             // i dodaj nove
      selfRef.marker.create(selfRef.map,rep);
     });
    });
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