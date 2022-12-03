import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router, Route} from 'simple-boot-core/decorators/route/Router';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {Inject} from 'simple-boot-core/decorators/inject/Inject';
import {Injection} from 'simple-boot-core/decorators/inject/Injection';
import {OnInitRender} from 'dom-render/lifecycle/OnInitRender';
import {OnCreateRender} from 'dom-render/lifecycle/OnCreateRender';

@Sim
@Component({
    template: '<div><h1>home</h1></div>'
})
class Home implements OnInitRender, OnCreateRender {
    constructor() {
        console.log('constructor home')
    }

    onCreateRender(...param: any[]): void {
        console.log('home onCreateRender')
    }

    onInitRender(...param: any[]): void {
        console.log('home onInitRender')
    }
}
@Sim
@Component({
    template: '<h1>user [name: ${this.name}$]</h1><div>good</div>',
    styles: ['div {color: red}']
})
class User {
    constructor(@Inject({disabled: true}) public name: string | undefined = 'default') {
    }
}

@Sim
@Router
({
    path: '',
    route: {
        '/': Home,
        '/user': User
    }
})
@Component({
    template,
    styles: [style]
})
export class Index implements RouterAction {
    child?: any;

    // @Route({path: '/'})
    // @Injection
    // home(home: Home) {
    //     return home;
    // }

    // @Route({path: '/user'})
    user() {
        const user = new User(new Date().toISOString());
        return user;
    }

    async canActivate(url: any, module: any) {
        this.child = module;
        console.log('route->', url, module);
    }
}

new SimpleBootFront(Index, new SimFrontOption(window).setUrlType(UrlType.hash)).run();
