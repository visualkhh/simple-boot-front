import {FrontModule} from '../module/FrontModule';
import {FrontRouter} from './FrontRouter';
import { RouterModule } from 'simple-boot-core/route/RouterModule';
import { SimFrontOption } from '../option/SimFrontOption';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';
import { Navigation } from '../service/Navigation';
import { FunctionUtils } from 'simple-boot-core/utils/function/FunctionUtils';
import { TargetNode, TargetNodeMode } from 'dom-render/RootScope';

export class RouteRender {
    constructor(private option: SimFrontOption, private simstanceManager: SimstanceManager) {
    }

    async routeRender(it: RouterModule<FrontRouter, FrontModule>, document: Document) {
        let lastRouterSelector = this.option?.selector;
        for (const routerChain of it.routerChains) {
            const moduleObj = this.simstanceManager?.getOrNewSim(routerChain.module);
            if (moduleObj instanceof FrontModule) {
                const option = await moduleObj.init({router: 'true'});
                if (!document.querySelector(`[module-id='${moduleObj?.id}']`)) {
                    this.render(moduleObj, document.querySelector(lastRouterSelector!), document);
                }
                if (moduleObj?._router_outlet_id) {
                    lastRouterSelector = '#' + moduleObj?._router_outlet_id;
                } else {
                    lastRouterSelector = '#' + moduleObj?.id;
                }
            }
        }

        // Module render
        const module = it.getModuleInstance();
        if (module instanceof FrontModule) {
            const option = await module.init();
            this.render(module, document.querySelector(lastRouterSelector!), document);
            this.renderd(document);
            (module as any)._onInitedChild();
            it.routerChains.reverse().forEach(it => (this.simstanceManager?.getOrNewSim(it.module) as any)?._onInitedChild());
        }
    }

    private renderd(document: Document) {
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
        }, document)
    }

    private procAttr(attrName: string, f: (h: HTMLElement, value: string | null) => void, document: Document) {
        document.querySelectorAll<HTMLElement>(`[${attrName}]`).forEach(it => {
            f(it, it.getAttribute(attrName));
        });
    }

    private render(module: FrontModule | undefined, targetSelector: Node | null, document: Document): boolean {
        if (module && targetSelector) {
            (module as any)._onInit()
            module.setScope(document, new TargetNode(targetSelector, TargetNodeMode.child))
            module.renderWrap();
            return true
        } else {
            return false
        }
    }
}