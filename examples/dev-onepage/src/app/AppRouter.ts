import { Index } from './features/index';
import template from './layouts/app.html'
import css from './layouts/app.css'
import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import { Intent } from 'simple-boot-core/intent/Intent';
import { User } from './features/index/User';
import { Navigation } from 'simple-boot-front/service/Navigation';
import { SimFrontOption } from 'simple-boot-front/option/SimFrontOption';
import { FrontLifeCycle } from 'simple-boot-front/module/FrontLifeCycle';

@Sim({scheme: 'layout-router'})
@Component({template, styles: [css]})
@Router({
    path: '',
    childs: {
        '': Index,
        '/': Index,
        '/user': User
    }
})
export class AppRouter implements RouterAction, FrontLifeCycle {
    name = 'AppRouter'
    data = {name: 'good'}
    child?: any

    constructor(private navigation: Navigation, private simOption: SimFrontOption) {
    }

    canActivate(url: Intent, module: any) {
        console.log('canActivate  router--->', this, url, module)
        this.name= 'zz'
        this.child = module;
    }

    onReady(data: HTMLFrameElement): void {
    }

    onRenderd(data: HTMLFrameElement): void {
    }

    onChangedRender(): void {
    }

    onCreate(): void {
    }

    onFinish(): void {
    }

    onInit(): void {
    }

    onInitedChild(): void {
    }
}
