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
import { FrontLifeCycle } from 'simple-boot-front/module/FrontLifeCycle';

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
export class AppRouter implements RouterAction, FrontLifeCycle {
    child?: any;
    data = 'my name is visual'
    constructor(private navigation: Navigation) {

    }

    onInit(): void {
        console.log('onInit');
    }
    onChangedRender(): void {
        console.log('onChangedRender');
    }
    onInitedChild(): void {
        console.log('onInitedChild');
    }
    onFinish(): void {
        console.log('onFinish');
    }
    onCreate(): void {
        console.log('onCreate');
    }

    canActivate(url: Intent, module: any): void {
        console.log('-------AppRouter----->', url, module)
        if (this.child !== module) {
            this.child = module;
        }
    }
}
