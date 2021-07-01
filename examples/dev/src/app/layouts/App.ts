import css from "./app.css"
import html from './app.html'
import {Module} from "simple-boot-front/module/Module";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {AjaxService} from "simple-boot-front/service/AjaxService";
import {SimstanceManager} from "simple-boot-front/simstance/SimstanceManager";
import {AppInfo} from './AppInfo';
import bootstrap_css from 'bootstrap/dist/css/bootstrap.min.css'; // <-- There it is!
@Sim({scheme: 'layout'})
export class App extends Module {
    info = new AppInfo();

    constructor(public ajaxService: AjaxService, public simstance: SimstanceManager) {
        super({template: html, styleImports: [bootstrap_css, css]});
    }

    onInit() {
        super.onInit();
    }
}
