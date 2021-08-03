import css from "./app.css"
import html from './app.html'
import {Module} from "simple-boot-front/module/Module";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {HttpService} from "../../../src/service/HttpService";
import {SimstanceManager} from "simple-boot-front/simstance/SimstanceManager";
import {AppInfo} from './AppInfo';

@Sim({scheme: 'layout'})
export class App extends Module {
    styleImports = [css];
    template = html;
    info = new AppInfo();

    constructor(public ajaxService: HttpService, public simstance: SimstanceManager) {
        super("app-layout-module");
    }

}
