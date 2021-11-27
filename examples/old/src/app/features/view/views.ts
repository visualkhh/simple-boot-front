import {ProjectService} from 'app/services/ProjectService';
import css from 'app/features/view/views.css';
import template from 'app/features/view/views.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {HttpService} from 'simple-boot-front/service/HttpService';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {View} from 'simple-boot-front/service/view/View';
import {RouterManager} from 'simple-boot-core/route/RouterManager';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Views {
    public data = 'data';
    // public a = new View<Element>('#input', this);

    constructor(public projectService: ProjectService, public ajax: HttpService, private routerManager: RouterManager) {
    }

    onInit() {
        console.log('-->', this.routerManager.activeRouterModule)
    }

    click() {
        this.data = 'data:' + Math.floor(RandomUtils.random(0, 100))
        // console.log('-->', this.a.e)
    }
}
