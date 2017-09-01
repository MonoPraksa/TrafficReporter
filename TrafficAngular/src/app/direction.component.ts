import {Component, ElementRef, OnInit} from '@angular/core';
declare var google:any;

import { CommunicationService } from './communication.service';

@Component({
    selector: 'direction',
    templateUrl: './direction.component.html',
    styleUrls: ['./direction.component.css']
})

export class DirectionComponent implements OnInit{
 public directionsService: any;   //    used for route finding
 public OriginInput: any;         //    autocomplete for origin
 public DestinationInput: any;    //    and destination inputs

    constructor(private elementRef: ElementRef,
        private communicationService: CommunicationService){
            this.directionsService = new google.maps.DirectionsService();

            this.communicationService.bounds$.subscribe(
                data=>{
                    this.OriginInput.setBounds(data);     // usmjerava searchbox da nudi lokacije
                    this.DestinationInput.setBounds(data);// bliže onima koje gledamo na mapi
                }
            )
    }

  origin: any;
  destination: any;
  location: any;
  useCurrentLocation: boolean;
  directionsInUse: boolean = false;

    sendToMap(){   
        var self = this;
        this.communicationService.directionsStateHidden=true;
        let request = {
            origin: this.origin.value,
            destination: this.destination.value,
            travelMode: google.maps.TravelMode['DRIVING']
          }
        if(this.useCurrentLocation)
            request.origin=this.location;
          this.directionsService.route(request, function(response, status) {
            if (status == 'OK') {
                self.directionsInUse = true;
                self.communicationService.sendDirections(response);
            }
          });

    }

    ngOnInit(): void {
        this.origin = this.elementRef.nativeElement.children[0].children[0];
        this.destination = this.elementRef.nativeElement.children[0].children[3];
        this.OriginInput = new google.maps.places.SearchBox(this.origin);
        this.DestinationInput = new google.maps.places.SearchBox(this.destination);
        }

    toggleCurrentLocation(){
        if(this.useCurrentLocation){
            this.useCurrentLocation=false;
        }
        else{
            this.useCurrentLocation=true;
            navigator.geolocation.getCurrentPosition(this.setCurrentLocation.bind(this));
        }
    }

    clearRoute(){
        this.communicationService.clearDirections(false);
        this.communicationService.directionsStateHidden=true;
        this.communicationService.activate(true);
        this.directionsInUse=false;
    }

    setCurrentLocation(position){
        this.location={lat: position.coords.latitude, lng:position.coords.longitude};
    }
}

