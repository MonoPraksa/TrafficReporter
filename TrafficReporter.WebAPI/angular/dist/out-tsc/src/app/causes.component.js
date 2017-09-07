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
var report_1 = require("./report");
var report_service_1 = require("./report.service");
var communication_service_1 = require("./communication.service");
var causes_service_1 = require("./causes.service");
var CausesComponent = /** @class */ (function () {
    function CausesComponent(problemService, communicationService, causesService) {
        this.problemService = problemService;
        this.communicationService = communicationService;
        this.causesService = causesService;
    }
    CausesComponent.prototype.onSelect = function (cause) {
        this.currentCause = cause;
        navigator.geolocation.getCurrentPosition(this.postProblem.bind(this));
    };
    CausesComponent.prototype.postProblem = function (position) {
        var report = new report_1.Report;
        report.Cause = this.currentCause;
        report.Lattitude = position.coords.latitude;
        report.Longitude = position.coords.longitude;
        report.DateCreated = new Date().toUTCString();
        //console.log(report);
        this.problemService.createReport(report)
            .then(function (data) {
            if (data == 0) {
                alert('We found matching report nearby and updated his rating.');
            }
        });
        this.communicationService.activate(true);
    };
    CausesComponent = __decorate([
        core_1.Component({
            selector: 'causes',
            templateUrl: './causes.component.html',
            styleUrls: ['./causes.component.css']
        }),
        __metadata("design:paramtypes", [report_service_1.ReportService,
            communication_service_1.CommunicationService,
            causes_service_1.CausesService])
    ], CausesComponent);
    return CausesComponent;
}());
exports.CausesComponent = CausesComponent;
//# sourceMappingURL=causes.component.js.map