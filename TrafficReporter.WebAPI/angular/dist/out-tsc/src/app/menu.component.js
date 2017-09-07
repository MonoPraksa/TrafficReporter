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
var causes_service_1 = require("./causes.service");
var communication_service_1 = require("./communication.service");
var MenuComponent = /** @class */ (function () {
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MenuComponent.prototype, "filterModel", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            causes_service_1.CausesService,
            communication_service_1.CommunicationService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map