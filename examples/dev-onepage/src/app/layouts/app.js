var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import css from "./app.css";
import html from './app.html';
import { FrontModule } from "simple-boot-front/module/Module";
import { Sim } from "simple-boot-front/decorators/SimDecorator";
import { AjaxService } from "simple-boot-front/service/AjaxService";
import { SimstanceManager } from "simple-boot-front/simstance/SimstanceManager";
var App = (function (_super) {
    __extends(App, _super);
    function App(ajaxService, simstance) {
        var _this = _super.call(this, { template: html, styleImports: [css] }) || this;
        _this.ajaxService = ajaxService;
        _this.simstance = simstance;
        return _this;
    }
    var _a, _b;
    App = __decorate([
        Sim({ scheme: 'layout' }),
        __metadata("design:paramtypes", [typeof (_a = typeof AjaxService !== "undefined" && AjaxService) === "function" ? _a : Object, typeof (_b = typeof SimstanceManager !== "undefined" && SimstanceManager) === "function" ? _b : Object])
    ], App);
    return App;
}(FrontModule));
export { App };
