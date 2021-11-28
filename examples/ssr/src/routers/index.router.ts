import { SimFrontOption, UrlType } from 'simple-boot-front/option/SimFrontOption';
import { SimpleBootFront } from 'simple-boot-front/SimpleBootFront';
import { getRouter, Route, Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import { UserComponent } from '../pages/user.component';
import { MainComponent } from '../pages/main.component';
@Sim()
@Router({
    path: '',
    route: {
        // '': '/',
        '/': UserComponent,
        '/main': MainComponent,
    }
})
@Component({
    template,
    styles: [style],
})
export class IndexRouter implements OnInit, RouterAction {
    child?: any;
    constructor() {
        console.log('Index constructor')
    }

    onInit(): void {
    }

    canActivate(url: any, module: any): void {
        this.child = module;
        console.log('canActivate-->', url, module)
    }
}
