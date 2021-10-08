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
    route: {
        '': Introduction,
        '/': Introduction,
        '/event': Event
    }
})
export class DocumentRouter implements RouterAction {
    name = 'DocumentRouter Name';
    child?: any
    constructor(private navigation: Navigation, public notFound: Notfound) {
    }

    canActivate(url: Intent, module: any) {
        //  console.log('-------DocumentRouter----->', url, 'module-->', module)
        if (!module) { // 404
            this.child = this.notFound;
        } else if (this.child !== module) {
            this.child = module;
        }

    }
}
