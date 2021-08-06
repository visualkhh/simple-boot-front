import { Index } from './features/index';
import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './layouts/app.html'
import css from './layouts/app.css'
@Sim({scheme: 'layout-router'})
@Router({
    path: '',
    childs: {
        '': Index,
        '/': Index
    }
})
@Component({template, styles: [css]})
export class AppRouter {
}
