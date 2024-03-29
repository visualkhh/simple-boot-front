import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import {Home} from './pages/home';
import {User} from './pages/user';
import {RouterAction} from 'simple-boot-core/route/RouterAction';

@Sim
@Router({
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

    async canActivate(url: any, module: any) {
        this.child = module;
    }
}

const config = new SimFrontOption(window).setUrlType(UrlType.hash);
const simpleApplication = new SimpleBootFront(Index, config);
simpleApplication.run();
