"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var map_component_1 = require("./map.component");
var causes_component_1 = require("./causes.component");
var menu_component_1 = require("./menu.component");
var direction_component_1 = require("./direction.component");
var report_service_1 = require("./report.service");
var communication_service_1 = require("./communication.service");
var causes_service_1 = require("./causes.service");
var forms_1 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                map_component_1.MapComponent,
                causes_component_1.CausesComponent,
                menu_component_1.MenuComponent,
                direction_component_1.DirectionComponent
            ],
            imports: [
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [report_service_1.ReportService, communication_service_1.CommunicationService, causes_service_1.CausesService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map