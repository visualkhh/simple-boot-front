import css from './app.css'
import html from './app.html'
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {AjaxService} from 'simple-boot-front/service/AjaxService';
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager';
import {AppInfo} from './AppInfo';
import bootstrap_css from 'bootstrap/dist/css/bootstrap.min.css'; // <-- There it is!
@Sim({scheme: 'layout'})
export class App extends FrontModule {
    info?: AppInfo;

    constructor(public ajaxService: AjaxService, public simstance: SimstanceManager) {
        super({template: html, styleImports: [bootstrap_css, css]});
    }

    onCreate() {
        new AppInfo().init().then(it => { this.info = it });
    }

    onInit() {
        super.onInit();
    }
}
