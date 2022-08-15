import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router, Route} from 'simple-boot-core/decorators/route/Router';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {User} from './components/user/user';

@Sim
@Component({
    template,
    styles: [style],
    using: [User]
})
export class Index {
}

new SimpleBootFront(Index, new SimFrontOption(window).setUrlType(UrlType.hash)).run();
