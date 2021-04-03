import css from "./app.css"
import html from './app.html'
import {Module} from "simple-boot-front/module/Module";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {AjaxService} from "simple-boot-front/service/AjaxService";
import {SimstanceManager} from "simple-boot-front/simstance/SimstanceManager";
@Sim()
export class App extends Module {
    styleImports = [css];
    template = html;
    constructor(
        public ajaxService: AjaxService,
        public simstance: SimstanceManager
    ) {
        super("app-router-module");
    }
}
