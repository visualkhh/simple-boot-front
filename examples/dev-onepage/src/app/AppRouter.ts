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
import { ScriptUtils } from 'dom-render/utils/script/ScriptUtils';

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

    async onInitRender() {

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
        console.log('onChangedRender AppRouter')
    }

    onCreate(): void {
        console.log('onCreate AppRouter')
    }

    onFinish(): void {
        console.log('onFinish AppRouter')
    }

    onInit(): void {
        console.log('onInit AppRouter')
    }

    onInitedChild(): void {
        console.log('onInitedChild AppRouter')
    }
}
