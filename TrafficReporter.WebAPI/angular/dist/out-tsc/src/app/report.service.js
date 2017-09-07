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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var api_service_1 = require("./api.service");
var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.reportUrl = api_service_1.WebApi.API_ENDPOINT + 'Report'; // URL to web api
    }
    // request all reports in area defined by map bounds
    ReportService.prototype.getReports = function (latMin, longMin, latMax, longMax, cause) {
        return this.http.get(this.reportUrl + "?dx=" + latMin + "&dy=" + longMin + "&ux=" + latMax + "&uy=" + longMax + "&cause=" + cause + "&pageSize=500")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ReportService.prototype.getReport = function (id) {
        var url = this.reportUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ReportService.prototype.delete = function (id) {
        var url = this.reportUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // register a new report
    ReportService.prototype.createReport = function (report) {
        return this.http
            .post(this.reportUrl, report, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /*
      updateReport(id: number): Promise<Report> {
        const url = `${this.reportUrl}/${id}`;
        return this.http
          .put(url, JSON.stringify(id), {headers: this.headers})
          .toPromise()
          .then(() => Report)
          .catch(this.handleError);
      }
        */
    // In case any of the steps above failed
    ReportService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ReportService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ReportService);
    return ReportService;
}());
exports.ReportService = ReportService;
//# sourceMappingURL=report.service.js.map