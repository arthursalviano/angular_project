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
var core_1 = require('@angular/core');
var menu_inicial_component_1 = require('../menu-inicial/menu-inicial.component');
var CentroComponent = (function () {
    function CentroComponent() {
    }
    CentroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'centro',
            templateUrl: 'centro.component.html',
            directives: ([menu_inicial_component_1.MenuInicialComponent])
        }), 
        __metadata('design:paramtypes', [])
    ], CentroComponent);
    return CentroComponent;
}());
exports.CentroComponent = CentroComponent;
//# sourceMappingURL=centro.component.js.map