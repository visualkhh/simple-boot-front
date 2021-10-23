import { SimFrontOption, UrlType } from 'simple-boot-front/option/SimFrontOption';
import { SimpleBootFront } from 'simple-boot-front/SimpleBootFront';
import { getRouter, Route, Router, Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import { Home } from './pages/Home';
import { User } from './pages/User';
import { RouterAction } from 'simple-boot-core/route/RouterAction';
import { FrontIntroduction } from './pages/front-introduction/front-introduction';
import { FrontComponent } from './pages/front-component/front-component';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import { Navigation } from 'simple-boot-front/service/Navigation';
import { CodeScript } from './scripts/CodeScript';
import { FrontQuickstart } from './pages/front-quickstart/front-quickstart';
declare const feather: any;
declare const hljs: any;
@Sim()
@Router({
    path: '',
    route: {
        '/': '/simple-boot-front/introduction',
        '/simple-boot-front/introduction': FrontIntroduction,
        '/simple-boot-front/quick-start': FrontQuickstart,
        '/simple-boot-front/component': FrontComponent,
        '/home': Home,
        '/user': User,
    }
})
@Component({
    template,
    styles: [style],
    using: [CodeScript]
})
export class Index implements OnInit, RouterAction {
    child?: any;
    private route: Route;
    private category?: HTMLSelectElement;
    private detail?: HTMLSelectElement;
    public detailsItems: string[] = [];
    constructor(public navagation: Navigation) {
        const data = getRouter(this)!;
        this. route = data.route;
    }

    onInit(): void {
        this.detailsItems = this.getDetails(this.category?.value)
    }

    changeCategory(data: string) {
        this.detailsItems = this.getDetails(data);
    }

    changeDetail(data: string) {
        this.navagation.go(data);
    }

    getDetails(prefix: string = '') {
        return Object.entries(this.route).filter(([k, v]) => k.startsWith('/' + prefix)).map(([k, v]) => k)
    }

    canActivate(url: any, module: any): void {
        this.child = module;
        // hljs.highlightAll();
        feather.replace({ 'aria-hidden': 'true' })
        document.querySelectorAll('.code-container').forEach(el => {
            hljs.highlightElement(el);
        });
    }
}
const simpleApplication = new SimpleBootFront(Index, new SimFrontOption(window).setUrlType(UrlType.hash));
simpleApplication.run();