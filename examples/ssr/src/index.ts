import { SimFrontOption, UrlType } from 'simple-boot-front/option/SimFrontOption';
import { SimpleBootFront } from 'simple-boot-front/SimpleBootFront';
import { getRouter, Route, Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import { OnInit } from '../../../dist/lifecycle/OnInit';
import { Main } from './pages/Main';
import { UserServiceFront } from '../front/UserServiceFront';
@Sim()
@Router({
    path: '',
    route: {
        '': '/',
        '/': Main,
    }
})
@Component({
    template,
    styles: [style],
})
export class Index implements OnInit, RouterAction {
    child?: any;
    constructor() {
    }

    onInit(): void {
    }

    canActivate(url: any, module: any): void {
        this.child = module;
    }
}
export const factory = (window: Window) => {
    UserServiceFront;
    return new SimpleBootFront(Index, new SimFrontOption(window).setUrlType(UrlType.path));
}
factory(window).run();
