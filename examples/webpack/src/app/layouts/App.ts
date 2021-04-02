import {Sim} from 'simple-boot-front/decorators/SimDecorator'
import {Module} from 'simple-boot-front/module/Module'
import {AjaxService} from 'simple-boot-front/service/AjaxService'
import html from './app.html'
import {SimstanceManager} from 'simple-boot-front/simstance/SimstanceManager'
import bootstrap from 'raw-loader!../../assets/libs/bootstrap/css/bootstrap.min.css';
import css from 'raw-loader!./dashboard.css'

@Sim()
export class App extends Module {
    styleImports = [bootstrap, css]
    constructor(public ajaxService: AjaxService, public simstance: SimstanceManager) {
        super('app-router-module', html)
    }

    onInit() {
        import('script-loader!../../assets/libs/bootstrap/js/bootstrap.bundle.min.js');
        import('script-loader!../../assets/libs/feather/feather.min.js');
    }

    onChangedRendered() {
        import('script-loader!./layout.js');
    }
}
