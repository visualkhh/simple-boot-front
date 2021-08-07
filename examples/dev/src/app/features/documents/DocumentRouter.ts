import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {Introduction} from './introduction/introduction';
import {Event} from './event/event';
import {Intent} from 'simple-boot-core/intent/Intent';
import { Component } from 'simple-boot-front/decorators/Component';
import css from './layout/document.css'
import template from './layout/document.html'
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import { Navigation } from 'simple-boot-front/service/Navigation';
import { Notfound } from '../errors/notfound/notfound';
@Sim({scheme: 'document-router'})
@Component({template, styles: [css]})
@Router({
    path: '/documents',
    childs: {
        '': Introduction,
        '/': Introduction,
        '/event': Event
    }
})
export class DocumentRouter implements RouterAction {
    child?: ConstructorType<any>
    constructor(private navigation: Navigation) {
    }

    canActivate(url: Intent, module: ConstructorType<object>) {
        console.log('-------DocumentRouter----->', url, module)
        if (module) {
            this.child = module;
        } else {
            this.child = Notfound
        }
    }
}
