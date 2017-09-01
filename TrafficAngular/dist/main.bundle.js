webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebApi; });
var WebApi = (function () {
    function WebApi() {
    }
    return WebApi;
}());

WebApi.API_ENDPOINT = "https://trafficreporter.azurewebsites.net/api/";
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "map {\r\n    height: 90%; \r\n}\r\n\r\ncauses{\r\n    height: 10%;\r\n    top:90%;\r\n}\r\n\r\nmap, causes, direction, menu{\r\n    padding: 0;\r\n    position: absolute;\r\n    margin: 0px;\r\n    width: 100%;    \r\n}\r\n\r\ndirection, menu{\r\n    top: 0px;\r\n    left: 25%;   \r\n    width: 50%;\r\n    background: rgba(127,127,127,0.4);\r\n}\r\n\r\ncauses{\r\n    background-color: lightcyan;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<map> </map>\r\n<causes> </causes>\r\n<direction>    </direction>\r\n<menu> </menu>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_component__ = __webpack_require__("../../../../../src/app/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__causes_component__ = __webpack_require__("../../../../../src/app/causes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_component__ = __webpack_require__("../../../../../src/app/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__direction_component__ = __webpack_require__("../../../../../src/app/direction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_service__ = __webpack_require__("../../../../../src/app/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__communication_service__ = __webpack_require__("../../../../../src/app/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__causes_service__ = __webpack_require__("../../../../../src/app/causes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_5__causes_component__["a" /* CausesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__direction_component__["a" /* DirectionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__report_service__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_9__communication_service__["a" /* CommunicationService */], __WEBPACK_IMPORTED_MODULE_10__causes_service__["a" /* CausesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/causes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/causes.component.html":
/***/ (function(module, exports) {

module.exports = "  <div>\r\n  <span *ngFor=\"let cause of causesService.causes\" (click)=\"onSelect(cause.Id)\">\r\n    <img src=\"../assets/images/{{cause.Id}}.png\">\r\n  </span>\r\n  </div> \r\n"

/***/ }),

/***/ "../../../../../src/app/causes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CausesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report__ = __webpack_require__("../../../../../src/app/report.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_service__ = __webpack_require__("../../../../../src/app/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communication_service__ = __webpack_require__("../../../../../src/app/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__causes_service__ = __webpack_require__("../../../../../src/app/causes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CausesComponent = (function () {
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
        var report = new __WEBPACK_IMPORTED_MODULE_1__report__["a" /* Report */];
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
    return CausesComponent;
}());
CausesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'causes',
        template: __webpack_require__("../../../../../src/app/causes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/causes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__communication_service__["a" /* CommunicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__causes_service__["a" /* CausesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__causes_service__["a" /* CausesService */]) === "function" && _c || Object])
], CausesComponent);

var _a, _b, _c;
//# sourceMappingURL=causes.component.js.map

/***/ }),

/***/ "../../../../../src/app/causes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CausesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CausesService = (function () {
    function CausesService(http) {
        this.http = http;
        this.Url = __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* WebApi */].API_ENDPOINT + 'Causes'; // URL to web api
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
    return CausesService;
}());
CausesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CausesService);

var _a;
//# sourceMappingURL=causes.service.js.map

/***/ }),

/***/ "../../../../../src/app/communication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CommunicationService = (function () {
    function CommunicationService() {
        this.activator = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.activator$ = this.activator.asObservable();
        this.directions = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.directions$ = this.directions.asObservable();
        this.clearRoute = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.clearRoute$ = this.clearRoute.asObservable();
        this.bounds = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.bounds$ = this.bounds.asObservable();
        this.directionsStateHidden = true;
        this.directionsStateInUse = false;
        this.menuStateHidden = true;
        this.geolocationDenied = false;
        this.filter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
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
    return CommunicationService;
}());
CommunicationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], CommunicationService);

//# sourceMappingURL=communication.service.js.map

/***/ }),

/***/ "../../../../../src/app/direction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n    width: 90%-1.5em;\r\n    margin-bottom: 1em;\r\n}\r\nbutton{\r\n    float: right;\r\n}\r\ndiv{\r\n    padding: 20px 0px;\r\n}\r\nimg{\r\n    height: 1.5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/direction.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"communicationService.directionsStateHidden\">\r\n<input placeholder=\"Starting point\" [disabled]=\"useCurrentLocation\"/>\r\n <img src=\"../assets/images/marker.png\" title=\"Use current location\" (click)=\"toggleCurrentLocation()\" [hidden]=\"communicationService.geolocationDenied\"/>\r\n<br>\r\n<input placeholder=\"Destination\" /> \r\n<br>\r\n<button (click)=\"clearRoute()\" [disabled]=\"!directionsInUse\"> Clear route </button>\r\n<button (click)=\"sendToMap()\"> Find a way</button>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/direction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__communication_service__ = __webpack_require__("../../../../../src/app/communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectionComponent = (function () {
    function DirectionComponent(elementRef, communicationService) {
        var _this = this;
        this.elementRef = elementRef;
        this.communicationService = communicationService;
        this.directionsInUse = false;
        this.directionsService = new google.maps.DirectionsService();
        this.communicationService.bounds$.subscribe(function (data) {
            _this.OriginInput.setBounds(data); // usmjerava searchbox da nudi lokacije
            _this.DestinationInput.setBounds(data); // bliže onima koje gledamo na mapi
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
        this.origin = this.elementRef.nativeElement.children[0].children[0];
        this.destination = this.elementRef.nativeElement.children[0].children[3];
        this.OriginInput = new google.maps.places.SearchBox(this.origin);
        this.DestinationInput = new google.maps.places.SearchBox(this.destination);
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
        this.communicationService.clearDirections(false);
        this.communicationService.directionsStateHidden = true;
        this.communicationService.activate(true);
        this.directionsInUse = false;
    };
    DirectionComponent.prototype.setCurrentLocation = function (position) {
        this.location = { lat: position.coords.latitude, lng: position.coords.longitude };
    };
    return DirectionComponent;
}());
DirectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'direction',
        template: __webpack_require__("../../../../../src/app/direction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/direction.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__communication_service__["a" /* CommunicationService */]) === "function" && _b || Object])
], DirectionComponent);

var _a, _b;
//# sourceMappingURL=direction.component.js.map

/***/ }),

/***/ "../../../../../src/app/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\ninput {\r\n    margin: 1%;\r\n    width: 90%;\r\n    height: 5%;\r\n    background-color: rgba(235,255,235,0.9);\r\n    color:black;\r\n}\r\n\r\n#tracking {\r\n    position: absolute;\r\n    z-index: 1000;\r\n        top: 95%;\r\n}\r\n\r\n.selected{\r\n    background-color: yellow;\r\n}\r\n\r\nimg{\r\n    width: 50px;\r\n    position: absolute;\r\n    top: 0px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    background: rgba(127,127,127,0.4)\r\n}\r\n\r\n#direction{\r\n    left: 0px;\r\n}\r\n\r\n#settings{\r\n    right: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div></div>\r\n<img src=\"./assets/images/menu160.png\" (click)=\"directionToggle()\" id=\"direction\"/>\r\n<img src=\"./assets/images/settings160.png\" (click)=\"menuToggle()\" id=\"settings\"/>\r\n\r\n<!--  <input placeholder=\"Upišite ime mjesta\"> -->\r\n<button (click)=\"trackingToggle()\" [class.selected]=\"tracker\" [disabled]=\"communicationService.geolocationDenied\" id=\"tracking\">Toggle tracking </button>\r\n<!-- \r\n<agm-map [latitude]=\"lat\"\r\n   [longitude]=\"lng\" [streetViewControl]=\"false\"\r\n   [zoom]=10>\r\n \r\n  <agm-marker *ngFor=\"let problem of Problems\" \r\n  [latitude]=\"problem.lat\" [longitude]=\"problem.lng\" \r\n  [iconUrl]=\"Causes[problem.cause]\">  </agm-marker>\r\n\r\n</agm-map> \r\n\r\n \r\n{{lat}} ###### {{lng}}\r\n-->"

/***/ }),

/***/ "../../../../../src/app/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_service__ = __webpack_require__("../../../../../src/app/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communication_service__ = __webpack_require__("../../../../../src/app/communication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__causes_service__ = __webpack_require__("../../../../../src/app/causes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__marker__ = __webpack_require__("../../../../../src/app/marker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rectangle__ = __webpack_require__("../../../../../src/app/rectangle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapComponent = (function () {
    function MapComponent(elementRef, reportService, communicationService, causesService) {
        var _this = this;
        this.elementRef = elementRef;
        this.reportService = reportService;
        this.communicationService = communicationService;
        this.causesService = causesService;
        this.filter = 63; // sadrži postavke filtra po cause
        this.navigationDisabled = false;
        this.directionBounds = new __WEBPACK_IMPORTED_MODULE_5__rectangle__["a" /* Rectangle */];
        this.reports = [];
        this.communicationService.activator$.subscribe(function (data) {
            setTimeout(_this.updateReports, 200, _this);
        });
        this.communicationService.directions$.subscribe(function (data) {
            var myRoute = data.routes[0].legs[0];
            _this.directionBounds.greaterX = _this.directionBounds.lesserX = myRoute.steps[0].start_location.lng();
            _this.directionBounds.greaterY = _this.directionBounds.lesserY = myRoute.steps[0].start_location.lat();
            for (var i = 1; i < myRoute.steps.length; i++) {
                if (_this.directionBounds.greaterX < myRoute.steps[i].start_location.lng())
                    _this.directionBounds.greaterX = myRoute.steps[i].start_location.lng();
                if (_this.directionBounds.lesserX > myRoute.steps[i].start_location.lng())
                    _this.directionBounds.lesserX = myRoute.steps[i].start_location.lng();
                if (_this.directionBounds.greaterY < myRoute.steps[i].start_location.lat())
                    _this.directionBounds.greaterY = myRoute.steps[i].start_location.lat();
                if (_this.directionBounds.lesserY > myRoute.steps[i].start_location.lat())
                    _this.directionBounds.lesserY = myRoute.steps[i].start_location.lat();
                if (_this.directionBounds.greaterX < myRoute.steps[i].end_location.lng())
                    _this.directionBounds.greaterX = myRoute.steps[i].end_location.lng();
                if (_this.directionBounds.lesserX > myRoute.steps[i].end_location.lng())
                    _this.directionBounds.lesserX = myRoute.steps[i].end_location.lng();
                if (_this.directionBounds.greaterY < myRoute.steps[i].end_location.lat())
                    _this.directionBounds.greaterY = myRoute.steps[i].end_location.lat();
                if (_this.directionBounds.lesserY > myRoute.steps[i].end_location.lat())
                    _this.directionBounds.lesserY = myRoute.steps[i].end_location.lat();
            }
            _this.communicationService.directionsStateInUse = true;
            _this.directionsDisplay.setDirections(data);
        });
        this.communicationService.filter$.subscribe(function (data) {
            _this.filter = data;
        });
        this.communicationService.clearRoute$.subscribe(function (data) {
            _this.communicationService.directionsStateInUse = data;
            _this.directionsDisplay.set('directions', null);
        });
    }
    MapComponent.prototype.initMap = function (position) {
        /*let position = {coords:{latitude:46, longitude: 16}}; */
        if (position.code) {
            this.communicationService.geolocationDenied = true;
            position.coords = { latitude: 46, longitude: 16 };
            alert("We could not get your location, which limits website functionality\n Reason: " + position.message);
            console.log(position.message);
        }
        var selfRef = this;
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
        this.marker = new __WEBPACK_IMPORTED_MODULE_4__marker__["a" /* Markers */](this.causesService);
        this.map.addListener('idle', function () {
            selfRef.communicationService.setBounds(selfRef.map.getBounds());
            selfRef.updateReports(selfRef);
        });
        setInterval(this.updateReports, 10000, this);
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
    };
    MapComponent.prototype.updatePosition = function (self) {
        navigator.geolocation.getCurrentPosition(self.setPosition.bind(self));
    };
    MapComponent.prototype.setPosition = function (position) {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.setCenter(this);
    };
    MapComponent.prototype.trackingToggle = function () {
        if (!this.tracker) {
            this.map.setZoom(16);
            this.tracker = setInterval(this.updatePosition, 1000, this);
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
    MapComponent.prototype.updateReports = function (selfRef) {
        var bounds;
        if (selfRef.communicationService.directionsStateInUse)
            bounds = { b: { b: selfRef.directionBounds.lesserX - 0.0005, f: selfRef.directionBounds.greaterX + 0.0005 },
                f: { b: selfRef.directionBounds.lesserY - 0.0005, f: selfRef.directionBounds.greaterY + 0.0005 } };
        else
            bounds = selfRef.map.getBounds();
        selfRef.reportService.getReports(bounds.b.b, bounds.f.b, bounds.b.f, bounds.f.f, selfRef.filter) // dohvati reportove 
            .then(function (report) {
            selfRef.marker.empty(); // stare markere
            report.forEach(function (rep) {
                selfRef.marker.create(selfRef.map, rep);
            });
        });
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
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'map',
        template: __webpack_require__("../../../../../src/app/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__report_service__["a" /* ReportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__report_service__["a" /* ReportService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__communication_service__["a" /* CommunicationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__causes_service__["a" /* CausesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__causes_service__["a" /* CausesService */]) === "function" && _d || Object])
], MapComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/marker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Markers; });
var Markers /* implements OnInit */ = (function () {
    function Markers(causesService) {
        this.causesService = causesService;
    }
    // Add a new marker to map (as described in report)
    Markers.prototype.create = function (map, report) {
        var pos = { lat: report.Lattitude, lng: report.Longitude };
        //console.log('Cause:'+Math.log2(report.Cause));console.log('Rating:'+report.Rating);
        var image = { url: this.causesService.causes[Math.log2(report.Cause)].IconUri, scaledSize: new google.maps.Size(40, 40) };
        Markers.Collection[Markers.Collection.length] = new google.maps.Marker({
            position: pos,
            map: map,
            icon: image
        });
    };
    Markers.prototype.current = function (map, pos) {
        Markers.Collection[Markers.Collection.length] = new google.maps.Marker({
            position: pos,
            map: map,
        });
    };
    // Remove all markers from the map
    Markers.prototype.empty = function () {
        Markers.Collection.forEach(function (marker) {
            marker.setMap(null);
        });
        Markers.Collection = []; // 
    };
    return Markers;
}());

Markers.Collection = [];
//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "../../../../../src/app/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\r\n    margin-bottom: 1em;\r\n}\r\nbutton{\r\n    float: right;\r\n}\r\n\r\nlabel{\r\n    text-shadow:  1px 1px #FFFFFF;\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"communicationService.menuStateHidden\">\r\n     Choose reports you want to display on map \r\n      <label *ngFor=\"let model of filterModel\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"model.selected\" value=\"{{model.id}}\"> {{model.name}}\r\n      </label> \r\n\r\n<!-- <button (click)=\"goBack()\">Back</button> -->\r\n<button (click)=\"apply()\">Apply</button>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__causes_service__ = __webpack_require__("../../../../../src/app/causes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communication_service__ = __webpack_require__("../../../../../src/app/communication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(elementRef, causesService, communicationService) {
        this.elementRef = elementRef;
        this.causesService = causesService;
        this.communicationService = communicationService;
        this.filterModel = [];
        this.waitingFunction(this);
    }
    MenuComponent.prototype.apply = function () {
        var filter = 0;
        this.filterModel.forEach(function (data) {
            if (data.selected)
                filter += Number(data.id); // add their value to filter
        });
        this.communicationService.setFilter(filter);
        this.communicationService.menuStateHidden = true; // hide the menu
        this.communicationService.activate(true); // refresh markers on map
    };
    MenuComponent.prototype.waitingFunction = function (selfRef) {
        if (selfRef.causesService.causes) {
            selfRef.causesService.causes.forEach(function (cause) {
                selfRef.filterModel[selfRef.filterModel.length] = { id: cause.Id, name: cause.Name, selected: true };
            });
            selfRef.apply();
        }
        else {
            setTimeout(selfRef.waitingFunction, 300, selfRef);
        }
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], MenuComponent.prototype, "filterModel", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'menu',
        template: __webpack_require__("../../../../../src/app/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__causes_service__["a" /* CausesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__causes_service__["a" /* CausesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__communication_service__["a" /* CommunicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__communication_service__["a" /* CommunicationService */]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/rectangle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
var Rectangle = (function () {
    function Rectangle() {
    }
    return Rectangle;
}());

//# sourceMappingURL=rectangle.js.map

/***/ }),

/***/ "../../../../../src/app/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.reportUrl = __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* WebApi */].API_ENDPOINT + 'Report'; // URL to web api
    }
    // request all reports in area defined by map bounds
    ReportService.prototype.getReports = function (latMin, longMin, latMax, longMax, cause) {
        return this.http.get(this.reportUrl + "?dx=" + latMin + "&dy=" + longMin + "&ux=" + latMax + "&uy=" + longMax + "&cause=" + cause + "&pageSize=250")
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
    return ReportService;
}());
ReportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ReportService);

var _a;
//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ "../../../../../src/app/report.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report; });
var Report = (function () {
    function Report() {
        this.Id = '';
        this.DateCreated = '';
        this.Rating = 0;
        this.Direction = 7;
    }
    return Report;
}());

// should check how to save id - probably string 
//# sourceMappingURL=report.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map