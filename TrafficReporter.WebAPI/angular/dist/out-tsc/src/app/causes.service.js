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
var api_service_1 = require("./api.service");
var CausesService = /** @class */ (function () {
    function CausesService(http) {
        this.http = http;
        this.Url = api_service_1.WebApi.API_ENDPOINT + 'Causes'; // URL to web api
        var selfRef = this;
        this.getCauses()
            .then(function (data) {
            selfRef.causes = data;
            var _loop_1 = function (i) {
                selfRef.getDataUri('../assets/images/' + selfRef.causes[i].Id + '.png', function (dataUri) {
                    selfRef.causes[i].IconUri = dataUri;
                });
            };
            for (var i = 0; i < selfRef.causes.length; i++) {
                _loop_1(i);
            }
        });
    }
    CausesService.prototype.getCauses = function () {
        return this.http.get(this.Url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CausesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CausesService.prototype.getDataUri = function (url, callback) {
        var image = new Image();
        image.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = 48; // or 'width' if you want a special/scaled size
            canvas.height = 48; // or 'height' if you want a special/scaled size
            canvas.getContext('2d').drawImage(image, 0, 0);
            // ... or get as Data URI
            callback(canvas.toDataURL('image/png'));
        };
        image.src = url;
    };
    CausesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CausesService);
    return CausesService;
}());
exports.CausesService = CausesService;
//# sourceMappingURL=causes.service.js.map