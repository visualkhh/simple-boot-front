import { SimFrontOption } from './option/SimFrontOption';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { getComponent } from './decorators/Component';
import { DomRender } from 'dom-render/DomRender';
import { TargetNode, TargetNodeMode } from 'dom-render/RootScope';
import { SimAtomic } from 'simple-boot-core/simstance/SimAtomic';
import { SimpleApplication } from 'simple-boot-core/SimpleApplication';
import { Intent } from 'simple-boot-core/intent/Intent';
import { Navigation } from './service/Navigation';
import { ScopeFrontObject } from './render/ScopeFrontObject';
import { ViewService } from './service/view/ViewService';
import { HttpService } from './service/HttpService';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';

export class SimpleBootFront extends SimpleApplication {
    constructor(public rootRouter: ConstructorType<any>, public option: SimFrontOption) {
        super(rootRouter, option);
        window.__dirname = 'simple-boot-front__dirname';
        option.setFactoryScopeObject((scope) => new ScopeFrontObject(scope, this.simstanceManager))
        option.proxy = {
            onProxy: (it: any) => {
                const component = getComponent(it);
                if (component && typeof it === 'object') {
                    console.log('proxyxxxxx', it)
                    const proxy = DomRender.proxy(it, {template: component.template ?? '', styles: component.styles},
                        [SimpleApplication, SimstanceManager, SimFrontOption, Navigation, ViewService, HttpService]);
                    console.log('proxyxxxxx--->', proxy)
                    return proxy
                }
                return it;
            }
        };
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
            this.routing<SimAtomic, any>(intent).then(async it => {
                if (it) {
                    it.routerChains.reduce((a, b) => {
                        const value = a.value! as any;
                        if (value.canActivate) {
                            value.canActivate(intent, b.type)
                        }
                        return b;
                    });

                    const r = it.router?.value! as any;
                    if (r.canActivate) {
                        r.canActivate(intent, it.module)
                    }
                }
            })
        })
        this.option.window.dispatchEvent(new Event('popstate'))
    }
}
