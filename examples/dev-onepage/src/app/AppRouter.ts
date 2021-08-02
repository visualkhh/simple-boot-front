import { Index } from './features/index';
import template from './layouts/app.html'
import css from './layouts/app.html'
import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim({scheme: 'layout-router'})
@Component({template, styles: [css]})
@Router({
    path: '',
    childs: {
        '': Index,
        '/': Index
    }
})
export class AppRouter {
    name = 'AppRouter'
}
