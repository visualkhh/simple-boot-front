import { Index } from './features/index';
import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './layouts/app.html'
import css from './layouts/app.css'
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import { Intent } from 'simple-boot-core/intent/Intent';
import { ConstructorType } from 'simple-boot-core/types/Types';
@Sim({scheme: 'layout-router'})
@Router({
    path: '',
    childs: {
        '': Index,
        '/': Index
    }
})
@Component({template, styles: [css]})
export class AppRouter implements RouterAction {
    child?: ConstructorType<object>;
    canActivate(url: Intent, module: ConstructorType<object>): void {
        this.child = module;
    }
}
