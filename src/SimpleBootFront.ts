import { SimFrontOption } from './option/SimFrontOption';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { getComponent } from './decorators/Component';
import { DomRender, RawSet } from 'dom-render/DomRender';
import { TargetNode, TargetNodeMode } from 'dom-render/RootScope';
import { SimAtomic } from 'simple-boot-core/simstance/SimAtomic';
import { SimpleApplication } from 'simple-boot-core/SimpleApplication';
import { Intent } from 'simple-boot-core/intent/Intent';
import { Navigation } from './service/Navigation';
import { ScopeFrontObject } from './render/ScopeFrontObject';
import { ViewService } from './service/view/ViewService';
import { HttpService } from './service/HttpService';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';
import { eventManager } from 'dom-render/events/EventManager';
import { SimGlobal } from 'simple-boot-core/global/SimGlobal';
import { IntentManager } from 'simple-boot-core/intent/IntentManager';
import { RouterManager } from 'simple-boot-core/route/RouterManager';

export class SimpleBootFront extends SimpleApplication {
    navigation!: Navigation;
    public domRendoerExcludeProxy = [SimpleApplication, IntentManager, RouterManager, SimstanceManager, SimFrontOption, Navigation, ViewService, HttpService];
    constructor(public rootRouter: ConstructorType<any>, public option: SimFrontOption) {
        super(rootRouter, option);
        window.__dirname = 'simple-boot-front__dirname';
        option.setDomRenderConfig({
            factoryScopeObject: (scope) => new ScopeFrontObject(scope, this.simstanceManager),
            targetAttributeNames: ['router-link'],
            applyEvent: (obj, elements) => {
                eventManager.procAttr(elements, 'router-link', (e, v) => {
                    if (v) {
                        e.addEventListener('click', (event) => {
                            SimGlobal().application.simstanceManager.getOrNewSim(Navigation)?.go(v)
                        })
                    }
                })
            }
            // changeVar(obj, elements, varName) {
            //     const navigation = SimGlobal().application.simstanceManager.getOrNewSim(Navigation);
            //     eventManager.procAttr(elements, 'router-link', (e, v) => {
            //         e.addEventListener('click', () => {
            //             navigation.go(v)
            //         })
            //         // console.log('changeVar --> ', e, v);
            //     })
            // }
        })
        option.proxy = {
            onProxy: (it: any) => this.createDomRender(it)
        };
    }

    public createDomRender<T>(obj: T, raws?: RawSet): T {
        if (raws) {
            return DomRender.proxy(obj, raws, this.domRendoerExcludeProxy);
        } else {
            const component = getComponent(obj);
            if (component && typeof obj === 'object') {
                return DomRender.proxy(obj, {template: component.template ?? '', styles: component.styles}, this.domRendoerExcludeProxy);
            }
        }

        return obj;
    }

    public run() {
        super.run();
        this.navigation = this.simstanceManager.getOrNewSim(Navigation)!
        // rootRouter는 처음한번 그려준다.
        const routerAtomic = new SimAtomic(this.rootRouter);
        const targetNode = new TargetNode(this.option.selector, TargetNodeMode.child, this.option.window.document)
        const router = routerAtomic.value!;
        const rootScope = DomRender.proxyObjectRender(router, targetNode, this.option.getDomRenderConfig());
        this.option.window.addEventListener('popstate', (event) => {
            const intent = new Intent(this.navigation.path ?? '');
            this.routing<SimAtomic, any>(intent).then(async it => {
                if (it?.routerChains?.length && it?.routerChains?.length > 0) {
                    it?.routerChains?.reduce?.((a, b) => {
                        const value = a.value! as any;
                        value?.canActivate?.(intent, b.type);
                        return b;
                    });
                }
                // 페이지 찾지못했을시.
                if (!it?.module) {
                    (it?.routerChains[it.routerChains.length - 1] as any)?.canActivate?.(intent, it?.module);
                } else { // 페이지 찾았을시
                    (it.router?.value! as any)?.canActivate?.(intent, it.module);
                }
                this.afterSetting();
            })
        })
        this.option.window.dispatchEvent(new Event('popstate'))
    }

    private afterSetting() {
        this.option.window.document.querySelectorAll('[router-active-class]').forEach(it => {
            const link = it.getAttribute('router-link') ?? '';
            const activeClasss = it.getAttribute('router-active-class') ?? '';
            const classs = activeClasss.split(',');
            if (this.navigation.path === link) {
                it.classList.add(...classs);
            } else {
                it.classList.remove(...classs);
            }
        });
    }
}
