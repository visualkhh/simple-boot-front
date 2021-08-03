import {Profile} from '../../shareds/Profile';
import {ProjectService} from '../../services/ProjectService';
import css from './views.css';
import html from './views.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {HttpService} from 'simple-boot-front/service/HttpService';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {View} from 'simple-boot-front/service/view/View';
import {RouterManager} from 'simple-boot-core/route/RouterManager';

@Sim()
export class Views extends FrontModule {
    public data = 'data';
    public profile: Profile | undefined;
    public a = new View<Element>('#input', this);

    constructor(public projectService: ProjectService, public ajax: HttpService, private routerManager: RouterManager) {
        super({template: html, styleImports: [css]});
    }

    onInit() {
        console.log('-->', this.routerManager.activeRouterModule)
    }

    click() {
        this.data = 'data:' + Math.floor(RandomUtils.random(0, 100))
        console.log('-->', this.a.e)
    }
}
