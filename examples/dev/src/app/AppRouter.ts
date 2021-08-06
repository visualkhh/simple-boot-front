import { Index } from './features/index';
import { Ajax } from './features/ajax/ajax';
import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { Intents } from './features/intent/intents';
import { Views } from './features/view/views';
import { Exception } from './features/exception/exception';
import { Aop } from './features/aop/aop';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { DocumentRouter } from './features/documents/DocumentRouter';
import { Intent } from 'simple-boot-core/intent/Intent';
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import { HttpService } from 'simple-boot-front/service/HttpService';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';
import bootstrap_css from 'bootstrap/dist/css/bootstrap.min.css';
import template from './layouts/app.html';
import css from './layouts/app.css';
import { Navigation } from 'simple-boot-front/service/Navigation';
import { LifeCycle } from 'dom-render/LifeCycle';
import { Scope } from 'dom-render/Scope';

@Sim({scheme: 'layout-router'})
@Component({template, styles: [css, bootstrap_css]})
@Router({
    path: '',
    childs: {
        '': Index,
        '/': Index,
        '/ajax': Ajax,
        '/intent': Intents,
        '/views': Views,
        '/exception': Exception,
        '/aop': Aop,
        // '/user/:id': Views
    },
    childRouters: [DocumentRouter]
})
export class AppRouter implements RouterAction, LifeCycle {
    child?: ConstructorType<object>;
    data = 'my name is visual'
    constructor(private navigation: Navigation) {

    }

    onReady(data: HTMLFrameElement): void {
        // console.log('onReady', data);
    }
    onRenderd(data: HTMLFrameElement): void {
        // console.log('onRenderd', data);
    }
    onScopeMaked(data: Scope): void {
        // console.log('onScopeMaked', data);
    }

    canActivate(url: Intent, module: ConstructorType<object>): void {
        // console.log('-------AppRouter----->', url, module)
        if (this.child !== module) {
            this.child = module;
        }
    }
}
