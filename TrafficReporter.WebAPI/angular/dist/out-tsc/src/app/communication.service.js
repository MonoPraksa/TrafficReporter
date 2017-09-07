"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var CommunicationService = /** @class */ (function () {
    function CommunicationService() {
        this.activator = new Subject_1.Subject();
        this.activator$ = this.activator.asObservable();
        this.directions = new Subject_1.Subject();
        this.directions$ = this.directions.asObservable();
        this.clearRoute = new Subject_1.Subject();
        this.clearRoute$ = this.clearRoute.asObservable();
        this.bounds = new Subject_1.Subject();
        this.bounds$ = this.bounds.asObservable();
        this.directionsStateHidden = true;
        this.directionsStateInUse = false;
        this.menuStateHidden = true;
        this.geolocationDenied = false;
        this.filter = new Subject_1.Subject();
        this.filter$ = this.filter.asObservable();
    }
    CommunicationService.prototype.activate = function (data) {
        this.activator.next(data);
    };
    CommunicationService.prototype.sendDirections = function (data) {
        this.directions.next(data);
    };
    CommunicationService.prototype.clearDirections = function (data) {
        this.clearRoute.next(data);
    };
    CommunicationService.prototype.setBounds = function (data) {
        this.bounds.next(data);
    };
    CommunicationService.prototype.setFilter = function (data) {
        this.filter.next(data);
    };
    CommunicationService = __decorate([
        core_1.Injectable()
    ], CommunicationService);
    return CommunicationService;
}());
exports.CommunicationService = CommunicationService;
//# sourceMappingURL=communication.service.js.map