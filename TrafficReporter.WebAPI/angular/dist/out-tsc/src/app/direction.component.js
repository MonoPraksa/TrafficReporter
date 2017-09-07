"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var communication_service_1 = require("./communication.service");
var DirectionComponent = /** @class */ (function () {
    function DirectionComponent(elementRef, communicationService) {
        var _this = this;
        this.elementRef = elementRef;
        this.communicationService = communicationService;
        this.directionsInUse = false;
        this.directionsService = new google.maps.DirectionsService();
        this.communicationService.bounds$.subscribe(function (data) {
            _this.OriginInput.setBounds(data); // makes searchbox offer locations 
            _this.DestinationInput.setBounds(data); // nearer to those found on map
        });
    }
    DirectionComponent.prototype.sendToMap = function () {
        var self = this;
        this.communicationService.directionsStateHidden = true;
        var request = {
            origin: this.origin.value,
            destination: this.destination.value,
            travelMode: google.maps.TravelMode['DRIVING']
        };
        if (this.useCurrentLocation)
            request.origin = this.location;
        this.directionsService.route(request, function (response, status) {
            if (status == 'OK') {
                self.directionsInUse = true;
                self.communicationService.sendDirections(response);
            }
        });
    };
    DirectionComponent.prototype.ngOnInit = function () {
        this.origin = this.elementRef.nativeElement.children[0].children[0]; //  get input elements 
        this.destination = this.elementRef.nativeElement.children[0].children[3]; // 
        this.OriginInput = new google.maps.places.SearchBox(this.origin); //  and give them to Google
        this.DestinationInput = new google.maps.places.SearchBox(this.destination); //  so he can add autocomplete features
    };
    DirectionComponent.prototype.toggleCurrentLocation = function () {
        if (this.useCurrentLocation) {
            this.useCurrentLocation = false;
        }
        else {
            this.useCurrentLocation = true;
            navigator.geolocation.getCurrentPosition(this.setCurrentLocation.bind(this));
        }
    };
    DirectionComponent.prototype.clearRoute = function () {
        this.communicationService.clearDirections(false); // clear displayed route
        this.communicationService.directionsStateHidden = true; // close directions window
        this.communicationService.activate(true); // refresh the map
        this.directionsInUse = false; // disable button for clearing route
    };
    DirectionComponent.prototype.setCurrentLocation = function (position) {
        this.location = { lat: position.coords.latitude, lng: position.coords.longitude }; // convert current location to google location object
    };
    DirectionComponent = __decorate([
        core_1.Component({
            selector: 'direction',
            templateUrl: './direction.component.html',
            styleUrls: ['./direction.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            communication_service_1.CommunicationService])
    ], DirectionComponent);
    return DirectionComponent;
}());
exports.DirectionComponent = DirectionComponent;
//# sourceMappingURL=direction.component.js.map