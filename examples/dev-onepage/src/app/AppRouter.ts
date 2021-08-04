import { Index } from './features/index';
import template from './layouts/app.html'
import css from './layouts/app.css'
import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import { Intent } from 'simple-boot-core/intent/Intent';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { User } from './features/index/User';
import { LifeCycle } from 'dom-render/LifeCycle';
import { Scope } from 'dom-render/Scope';
import { Navigation } from 'simple-boot-front/service/Navigation';

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
export class AppRouter implements RouterAction, LifeCycle {
    name = 'AppRouter'
    data = {name: 'good'}
    child?: ConstructorType<any>

    constructor(private navigation: Navigation) {
    }

    canActivate(url: Intent, module: ConstructorType<object>) {
        console.log('canActivate  router--->', url, module)
        this.child = module;
    }

    onReady(data: HTMLFrameElement): void {
        // console.log('--onReady')
    }

    onRenderd(data: HTMLFrameElement): void {
        // console.log('--onRenderd')
    }

    onScopeMaked(data: Scope): void {
        // console.log('--onScopeMaked')
    }
}
