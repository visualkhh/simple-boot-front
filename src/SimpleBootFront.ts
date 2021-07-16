import {SimFrontOption} from './option/SimFrontOption';
import {SimpleApplication} from 'simple-boot-core/SimpleApplication';
import {SimFrontProxyHandler} from './proxy/SimFrontProxyHandler';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {Navigation} from './service/Navigation';
import {Intent} from 'simple-boot-core/intent/Intent';
import {FrontRouter} from './router/FrontRouter';
import {FrontModule} from './module/FrontModule';
import {FunctionUtils} from 'simple-boot-core/utils/function/FunctionUtils';
import {fromEvent} from 'rxjs';
import {TargetNode, TargetNodeMode} from 'dom-render/RootScope';

export class SimpleBootFront extends SimpleApplication {
    constructor(public rootRouter: ConstructorType<FrontRouter>, public option: SimFrontOption) {
        super(rootRouter, option);
        window.__dirname = 'simple-boot-front__dirname';
        option.simProxy = new SimFrontProxyHandler(option);
    }

    public run() {
        super.run();
        const navigation = this.simstanceManager.getOrNewSim(Navigation)!
        fromEvent<any>(window, 'popstate').subscribe((_) => {
            const intent = new Intent(navigation.path ?? '');
            this.routing<FrontRouter, FrontModule>(intent).then(it => {
                let lastRouterSelector = this.option?.selector;
                it.routerChains.forEach(it => {
                    const moduleObj = this.simstanceManager?.getOrNewSim(it.module);
                    if (moduleObj instanceof FrontModule) {
                        moduleObj.init().then(_ => {
                            if (!document.querySelector(`[module-id='${moduleObj?.id}']`)) {
                                this.render(moduleObj, document.querySelector(lastRouterSelector!));
                            }
                            if (moduleObj?._router_outlet_id) {
                                lastRouterSelector = '#' + moduleObj?._router_outlet_id;
                            } else {
                                lastRouterSelector = '#' + moduleObj?.id;
                            }
                        })
                    }
                });

                // Module render
                const module = it.getModuleInstance();
                module.init().then(_ => {
                    this.render(module, document.querySelector(lastRouterSelector!));
                    this.renderd();
                    (module as any)._onInitedChild();
                    it.routerChains.reverse().forEach(it => (this.simstanceManager?.getOrNewSim(it.module) as any)?._onInitedChild());
                })
            })
        })
        window.dispatchEvent(new Event('popstate'))
    }

    public renderd() {
        const attr = 'router-active-class';
        const navigation = this.simstanceManager?.getOrNewSim(Navigation);
        this.procAttr(attr, (it, value) => {
            const actives = FunctionUtils.eval<string[]>(value ?? '[]')
            if (!actives) return;
            const hrefAttr = (it.getAttribute('router-link') ?? '')
            if (hrefAttr === navigation?.path) {
                it.classList.add(...actives)
            } else {
                it.classList.remove(...actives)
            }
        })
    }

    procAttr(attrName: string, f: (h: HTMLElement, value: string | null) => void) {
        document.querySelectorAll<HTMLElement>(`[${attrName}]`).forEach(it => {
            f(it, it.getAttribute(attrName));
        });
    }

    public render(module: FrontModule | undefined, targetSelector: Node | null): boolean {
        if (module && targetSelector) {
            (module as any)._onInit()
            module.setScope(new TargetNode(targetSelector, TargetNodeMode.child))
            module.renderWrap();
            return true
        } else {
            return false
        }
    }
}
