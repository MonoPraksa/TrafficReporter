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
var report_service_1 = require("./report.service");
var communication_service_1 = require("./communication.service");
var causes_service_1 = require("./causes.service");
var marker_1 = require("./marker");
var rectangle_1 = require("./rectangle");
var MapComponent = /** @class */ (function () {
    function MapComponent(elementRef, reportService, communicationService, causesService) {
        var _this = this;
        this.elementRef = elementRef;
        this.reportService = reportService;
        this.communicationService = communicationService;
        this.causesService = causesService;
        this.filter = 63; // contains settings for filter
        this.throttler = false; // used to throttle request to api when route is set
        this.directionBounds = [];
        var selfRef = this;
        this.communicationService.activator$.subscribe(function (data) {
            setTimeout(_this.updateReports, 200, _this, false);
        });
        this.communicationService.directions$.subscribe(function (data) {
            var myRoute = data.routes[0].legs[0];
            _this.directionsFromGoogle = myRoute;
            _this.directionBounds.length = 0; // clears all bounds from last query
            var currentBound = 0; // number of current boundary
            var currentLat = myRoute.start_location.lat();
            var currentLng = myRoute.start_location.lng();
            selfRef.directionBounds[0] = new rectangle_1.Rectangle;
            selfRef.directionBounds[0].greaterX = selfRef.directionBounds[currentBound].lesserX = currentLng;
            selfRef.directionBounds[0].greaterY = selfRef.directionBounds[currentBound].lesserY = currentLat;
            myRoute.steps.forEach(function (step) {
                step.path.forEach(function (part) {
                    if (selfRef.directionBounds[currentBound].greaterX < part.lng())
                        selfRef.directionBounds[currentBound].greaterX = part.lng();
                    if (selfRef.directionBounds[currentBound].greaterY < part.lat())
                        selfRef.directionBounds[currentBound].greaterY = part.lat();
                    if (selfRef.directionBounds[currentBound].lesserX > part.lng())
                        selfRef.directionBounds[currentBound].lesserX = part.lng();
                    if (selfRef.directionBounds[currentBound].lesserY > part.lat())
                        selfRef.directionBounds[currentBound].lesserY = part.lat();
                    if ((part.lng() - currentLng) * (part.lng() - currentLng) + (part.lat() - currentLat) * (part.lat() - currentLat) > 0.09) {
                        ++currentBound;
                        selfRef.directionBounds[currentBound] = new rectangle_1.Rectangle;
                        selfRef.directionBounds[currentBound].greaterX = selfRef.directionBounds[currentBound].lesserX = part.lng();
                        selfRef.directionBounds[currentBound].greaterY = selfRef.directionBounds[currentBound].lesserY = part.lat();
                        currentLat = part.lat();
                        currentLng = part.lng();
                    }
                });
            });
            //  console.log(selfRef.directionBounds);
            selfRef.throttler = false;
            clearTimeout(selfRef.throttlerTimer);
            selfRef.throttlerTimer = setTimeout(function () { selfRef.throttler = true; }, 5000);
            _this.communicationService.directionsStateInUse = true;
            _this.directionsDisplay.setDirections(data);
        });
        this.communicationService.filter$.subscribe(function (data) {
            _this.filter = data;
        });
        this.communicationService.clearRoute$.subscribe(function (data) {
            clearTimeout(selfRef.throttlerTimer);
            selfRef.throttler = false;
            _this.communicationService.directionsStateInUse = data;
            _this.directionsDisplay.set('directions', null);
        });
    }
    MapComponent.prototype.initMap = function (position) {
        if (position.code) {
            this.communicationService.geolocationDenied = true;
            position.coords = { latitude: 46, longitude: 16 };
            alert("We could not get your location, which limits website functionality\n Reason: " + position.message);
            // console.log(position.message);
        }
        var selfRef = this;
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
        this.marker = new marker_1.Markers(this.causesService);
        this.map.addListener('idle', function () {
            selfRef.communicationService.setBounds(selfRef.map.getBounds());
            selfRef.updateReports(selfRef, false);
        });
        setInterval(this.updateReports, 15000, this, true);
    };
    MapComponent.prototype.updatePosition = function (self) {
        if (self.tracker && self.map.zoom < 16)
            self.map.setZoom(16);
        navigator.geolocation.getCurrentPosition(self.setPosition.bind(self));
    };
    MapComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.setCenter(this);
    };
    MapComponent.prototype.trackingToggle = function () {
        if (!this.tracker) {
            this.tracker = setInterval(this.updatePosition, 2000, this);
        }
        else {
            clearInterval(this.tracker);
            this.tracker = undefined;
        }
    };
    MapComponent.prototype.directionToggle = function () {
        this.communicationService.directionsStateHidden = !this.communicationService.directionsStateHidden;
        this.communicationService.menuStateHidden = true;
    };
    MapComponent.prototype.menuToggle = function () {
        this.communicationService.menuStateHidden = !this.communicationService.menuStateHidden;
        this.communicationService.directionsStateHidden = true;
    };
    MapComponent.prototype.updateReports = function (selfRef, timerCalled) {
        console.log("!tracker " + !selfRef.tracker + ";\nthrotller " + selfRef.throttler + ";\n!timerCalled " + !timerCalled);
        if (!selfRef.tracker && selfRef.throttler && !timerCalled || !selfRef.map.getBounds) {
            return;
        }
        var MapBounds = selfRef.map.getBounds();
        var bounds = [];
        if (selfRef.communicationService.directionsStateInUse) {
            selfRef.directionBounds.forEach(function (bound) {
                if ((MapBounds.b.b < bound.greaterX && MapBounds.f.b < bound.greaterY)
                    && (MapBounds.b.f > bound.lesserX && MapBounds.f.f > bound.lesserY)) {
                    bounds[bounds.length] = { b: { b: bound.lesserX, f: bound.greaterX },
                        f: { b: bound.lesserY, f: bound.greaterY } };
                }
            });
            //  console.log(bounds);
            selfRef.marker.empty(); // clear old markers
            bounds.forEach(function (bound) {
                selfRef.reportService.getReports(bound.b.b, bound.f.b, bound.b.f, bound.f.f, selfRef.filter) // get reports
                    .then(function (report) {
                    report.forEach(function (rep) {
                        selfRef.marker.create(selfRef.map, rep); // add new markers
                    });
                });
            });
        }
        else {
            selfRef.reportService.getReports(MapBounds.b.b, MapBounds.f.b, MapBounds.b.f, MapBounds.f.f, selfRef.filter) // get reports
                .then(function (report) {
                selfRef.marker.empty(); // remove old markers
                report.forEach(function (rep) {
                    selfRef.marker.create(selfRef.map, rep); // and add new ones
                });
            });
        }
    };
    MapComponent.prototype.ngOnInit = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.initMap.bind(this), this.initMap.bind(this));
        }
        else {
            var position = { coords: { latitude: 46, longitude: 16 } };
            this.initMap.bind(position);
        }
        // console.log(this.elementRef);
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: './map.component.html',
            styleUrls: ['./map.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            report_service_1.ReportService,
            communication_service_1.CommunicationService,
            causes_service_1.CausesService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map