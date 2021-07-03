import css from './app.css'
import html from './app.html'
import {AjaxService} from 'simple-boot-front/service/AjaxService';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager';

@Sim({scheme: 'layout'})
export class App extends FrontModule {
    constructor(public ajaxService: AjaxService, public simstance: SimstanceManager) {
        super({template: html, styleImports: [css]});
    }
}
