import { SimFrontOption } from 'simple-boot-front/option/SimFrontOption';
import { SimpleBootFront } from 'simple-boot-front/SimpleBootFront';
import { Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import { Home } from 'pages/Home';
import { User } from 'pages/User';
import { RouterAction } from 'simple-boot-core/route/RouterAction';
@Sim()
@Router({
    path: '',
    childs: {
        '/': Home,
        '/user': User,
    }
})
@Component({
    template,
    styles: [style]
})
export class Index implements RouterAction{
    child?: any;
    canActivate(url: any, module: any): void {
        this.child = module;
    }

}
const simpleApplication = new SimpleBootFront(Index, new SimFrontOption(window));
simpleApplication.run();
