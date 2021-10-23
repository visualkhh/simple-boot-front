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
import { FrontOption } from './pages/front-options/front-option';
import { FrontRouter } from './pages/front-router/front-router';
import { FrontScript } from './pages/front-script/front-script';
import { CliIntroduction } from './pages/cli-introduction/cli-introduction';
import { CreateIntroduction } from './pages/create-introduction/create-introduction';
import { CoreIntroduction } from './pages/core-introduction/core-introduction';
import { CoreQuickstart } from './pages/core-quickstart/core-quickstart';
import { CoreRouter } from './pages/core-router/core-router';
import { CoreIntent } from './pages/core-intent/core-intent';
import { CoreAop } from './pages/core-aop/core-aop';
import { CoreAdvice } from './pages/core-advice/core-advice';
import { DomrenderIntroduction } from './pages/domrender-introduction/domrender-introduction';
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
        '/simple-boot-front/router': FrontRouter,
        '/simple-boot-front/script': FrontScript,
        '/dom-render/introduction': DomrenderIntroduction,
        '/simple-boot-front/config-option': FrontOption,
        '/simple-boot-core/introduction': CoreIntroduction,
        '/simple-boot-core/quick-start': CoreQuickstart,
        '/simple-boot-core/router': CoreRouter,
        '/simple-boot-core/intent': CoreIntent,
        '/simple-boot-core/aop': CoreAop,
        '/simple-boot-core/advice': CoreAdvice,
        '/create-simple-boot-front/introduction': CreateIntroduction,
        '/simple-boot-front-cli/introduction': CliIntroduction,
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
        console.log('detal-ss>', data, this.detailsItems)
    }

    changeDetail(data: string) {
        console.log('--?', this.navagation.path, data)
        if (data) {
            this.navagation.go(data);
        }
    }

    getPath(depth: number) {
        return this.navagation.path?.split('/')[depth] ?? '';
    }

    getDetails(prefix: string = '') {
        return Object.entries(this.route).filter(([k, v]) => k.split('/')[1] === prefix).map(([k, v]) => k)
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
