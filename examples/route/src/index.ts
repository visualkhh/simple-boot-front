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

@Sim
@Component({
    template: '<div><h1>home</h1></div>'
})
class Home {
}

@Sim
@Component({
    template: '<div><h1>user [name: ${this.name}$]</h1></div>'
})
class User {
    constructor(@Inject({disabled: true}) public name: string | undefined = 'default') {
    }
}

@Sim
@Router
@Component({
    template,
    styles: [style]
})
export class Index implements RouterAction {
    child?: any;

    @Route({path: '/'})
    home() {
        return Home;
    }

    @Route({path: '/user1'})
    @Injection
    user1(user: User) {
        return user;
    }

    @Route({path: '/user2'})
    user2() {
        const user = new User(new Date().toISOString());
        return user;
    }

    async canActivate(url: any, module: any) {
        this.child = module;
        console.log('route->', url, module);
    }
}

new SimpleBootFront(Index, new SimFrontOption(window).setUrlType(UrlType.hash)).run();
