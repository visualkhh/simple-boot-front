import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
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
    public userName = 'userName';
    public userComponent?: User;
    onCreateRender(...param: any[]): void {
        console.log('Index onCreateRender');
    }

    onInitRender(...param: any[]): void {
        console.log('Index onInitRender');
    }

    changeName() {
        console.log('------>', this.userComponent)
        if (this.userComponent) {
            this.userComponent.name = new Date().toISOString();
        }
        // this.userName = new Date().toISOString();
    }
}

new SimpleBootFront(Index, new SimFrontOption(window).setUrlType(UrlType.hash)).run();
