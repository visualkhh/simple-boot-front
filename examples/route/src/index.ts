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
import {AvatarService} from '../services/AvatarService';
import { MypageRouter } from './pages/mypage.router';

@Sim
@Component({
    template: '<div><h1>home</h1><img class="w-8 h-8 rounded-full" src="${this.avatarService.randomAvatarUrl()}$" alt="Neil image"></div>'
})
class Home implements OnInitRender, OnCreateRender {
    constructor(public avatarService: AvatarService) {
        console.log('constructor home')
    }

    url() {
        return 'https://avatars.dicebear.com/api/adventurer-neutral/0.6226264321020589.svg';
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

    // url() {
    //     return 'https://yt3.ggpht.com/ytc/AMLnZu8Zv9UuA3wTqAiSdmhBK3Dcvq1iuGDiHeNBa4xpMmg=s88-c-k-c0x00ffffff-no-rj-mo';
    // }

}

@Sim
@Router
({
    path: '',
    route: {
        '/': Home,
        '/user': User,
        '/mypage': MypageRouter
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

    url() {
        return 'https://yt3.ggpht.com/ytc/AMLnZu8Zv9UuA3wTqAiSdmhBK3Dcvq1iuGDiHeNBa4xpMmg=s88-c-k-c0x00ffffff-no-rj-mo';
    }

    say() {
        return 'zzzz';
    }

    async canActivate(url: any, module: any) {
        this.child = module;
        console.log('route->', url, module);
    }
}

new SimpleBootFront(Index, new SimFrontOption(window).setUrlType(UrlType.path)).run();
