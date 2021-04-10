import css from "./app.css"
import html from './app.html'
import {Module} from "simple-boot-front/module/Module";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {AjaxService} from "simple-boot-front/service/AjaxService";
import {SimstanceManager} from "simple-boot-front/simstance/SimstanceManager";
import {Intent} from 'simple-boot-front/intent/Intent';
import {AppInfo} from './AppInfo';

@Sim({scheme: 'layout'})
export class App extends Module {
    styleImports = [css];
    template = html;
    info = new AppInfo();
    constructor(public ajaxService: AjaxService, public simstance: SimstanceManager) {
        super("app-layout-module");
    }

}
