import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router, Route} from 'simple-boot-core/decorators/route/Router';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {User} from './components/user/user';
import {OnInitRender} from 'dom-render/lifecycle/OnInitRender';
import {OnCreateRender} from 'dom-render/lifecycle/OnCreateRender';

@Sim
@Component({
    template,
    styles: [style],
    using: [User]
})
export class Index implements OnCreateRender, OnInitRender {
    onCreateRender(...param: any[]): void {
        console.log('Index onCreateRender', param, document.body.innerHTML);

    }

    onInitRender(...param: any[]): void {
        console.log('Index onInitRender', param, document.body.innerHTML);
    }
}

new SimpleBootFront(Index, new SimFrontOption(window).setUrlType(UrlType.hash)).run();
