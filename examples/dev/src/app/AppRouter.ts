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
import bootstrap_css from 'bootstrap/dist/css/bootstrap.min.css';
import template from './layouts/app.html';
import css from './layouts/app.css';
import { FrontLifeCycle } from 'simple-boot-front/module/FrontLifeCycle';
import { SubNotfound } from './features/documents/errors/notfound/subNotfound';

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
    constructor(private subNotfound: SubNotfound) {

    }

    onInit(): void {
        console.log('AppRouter--->onInit');
    }
    onChangedRender(): void {
        console.log('AppRouter--->onChangedRender');
    }
    onInitedChild(): void {
        console.log('AppRouter--->onInitedChild');
    }
    onFinish(): void {
        console.log('AppRouter--->onFinish');
    }
    onCreate(): void {
        console.log('AppRouter--->onCreate');
    }

    canActivate(url: Intent, module: any): void {
        // console.log('-------AppRouter----->', url, this.child, module, this.child !== module)
        if (!module) { // 404
            this.child = this.subNotfound;
        } else if (this.child !== module) {
            this.child = module;
        }
    }
}
