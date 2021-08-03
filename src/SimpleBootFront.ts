import { SimFrontOption } from './option/SimFrontOption';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { RouteRender } from './router/RouteRender';
import { getComponent } from './decorators/Component';
import { DomRender } from 'dom-render/DomRender';
import { TargetNode, TargetNodeMode } from 'dom-render/RootScope';
import { SimAtomic } from '../libs/simple-boot-core/src/simstance/SimAtomic';
import { SimpleApplication } from 'simple-boot-core/SimpleApplication';
import { Intent } from 'simple-boot-core/intent/Intent';
import { Navigation } from './service/Navigation';
import { ScopeFrontObject } from './render/ScopeFrontObject';
import { ViewService } from './service/view/ViewService';
import { HttpService } from './service/HttpService';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';

export class SimpleBootFront extends SimpleApplication {
    public routeRender: RouteRender;

    constructor(public rootRouter: ConstructorType<any>, public option: SimFrontOption) {
        super(rootRouter, option);
        window.__dirname = 'simple-boot-front__dirname';
        option.setFactoryScopeObject((scope) => new ScopeFrontObject(scope, this.simstanceManager))
        option.proxy = {
            onProxy: (it: any) => {
                const component = getComponent(it);
                if (component && typeof it === 'object') {
                    const proxy = DomRender.proxy(it, {template: component.template ?? '', styles: component.styles},
                        [SimpleApplication, SimstanceManager, RouteRender, SimFrontOption, Navigation, ViewService, HttpService]);
                    console.log('proxyxxxxx', proxy)
                    return proxy
                }
                return it;
            }
        };
        // option.simProxy = new SimFrontProxyHandler(option);
        this.routeRender = new RouteRender(this.option, this.simstanceManager);
    }

    public run() {
        super.run();
        // rootRouter는 처음한번 그려준다.
        const routerAtomic = new SimAtomic(this.rootRouter);
        const targetNode = new TargetNode(this.option.selector, TargetNodeMode.child, this.option.window.document)
        const router = routerAtomic.value!;
        console.log('executeRender==before', router)
        const rootScope = DomRender.proxyObjectRender(router, targetNode, this.option.domRenderConfig);
        console.log('executeRender==before====')
        // rootScope.executeRender();

        const navigation = this.simstanceManager.getOrNewSim(Navigation)!
        window.addEventListener('popstate', (event) => {
            const intent = new Intent(navigation.path ?? '');
            this.routing(intent).then(async it => {
                it.routerChains.reduce((a, b) => {
                    if (a.canActivate) {
                        a.canActivate(intent, b)
                    }
                    return b;
                });
                if (it.router.canActivate) {
                    it.router.canActivate(intent, it.module)
                }
            })
        })
        this.option.window.dispatchEvent(new Event('popstate'))
    }
}
