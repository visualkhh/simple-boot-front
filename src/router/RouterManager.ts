import 'reflect-metadata'
import {fromEvent} from 'rxjs';
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager';
import {Runnable} from 'simple-boot-core/run/Runnable';
import {FunctionUtils} from 'simple-boot-core/utils/function/FunctionUtils';
import {FrontModule} from '../module/FrontModule';
import {SimFrontOption} from '../option/SimFrontOption';
import {Navigation} from '../service/Navigation';
import {Router} from './Router';
import {RouterModule} from './RouterModule';
import {TargetNode, TargetNodeMode} from '../render/compile/RootScope';

export class RouterManager implements Runnable {
    constructor(private option: SimFrontOption, private simstanceManager: SimstanceManager) {
    }

    public run() {
        fromEvent<any>(window, 'popstate').subscribe((_) => {
            this.executeRouter()
        })
        window.dispatchEvent(new Event('popstate'))
    }

    public executeRouter() {
        const routers: Router[] = [];
        const navigation = this.simstanceManager.getOrNewSim(Navigation)!;
        const rootRouter = this.simstanceManager.getOrNewSim(this.option.rootRouter);
        let executeModule = rootRouter?.getExecuteModule(routers);
        if (!executeModule) {
            // notfound find
            let notFound;
            for (const route of routers.slice().reverse()) {
                const nf = route.notFound(navigation.pathInfo);
                if (nf) {
                    notFound = nf;
                    break;
                }
            }
            notFound = notFound ?? rootRouter?.notFound(navigation.pathInfo);
            executeModule = new RouterModule(rootRouter, this.simstanceManager?.getOrNewSim(notFound));
        }

        if (executeModule.module) {
            executeModule.router?.canActivate(navigation.pathInfo, executeModule).then(targetModule => {
                // console.log('targetModule==>', targetModule)
                if (targetModule) {
                    let lastRouterSelector = this.option?.selector;
                    // routerModule render
                    routers.forEach(it => {
                        const moduleObj = this.simstanceManager?.getOrNewSim(it.module)
                        if (moduleObj instanceof FrontModule) {
                            if (!document.querySelector(`[module-id='${moduleObj?.id}']`)) {
                                this.render(moduleObj, document.querySelector(lastRouterSelector!));
                            }
                            if (moduleObj?._router_outlet_id) {
                                lastRouterSelector = '#' + moduleObj?._router_outlet_id;
                            } else {
                                lastRouterSelector = '#' + moduleObj?.id;
                            }
                        }
                    });
                    // if (typeof targetModule === 'function') {
                    //     targetModule = this.simstanceManager?.getOrNewSim(targetModule) as Module;
                    // }
                    // Module render
                    const module = targetModule instanceof RouterModule ? targetModule.module : this.simstanceManager?.getOrNewSim(targetModule)!;
                    this.render(module, document.querySelector(lastRouterSelector!));
                    this.renderd();
                    (module as any)._onInitedChild();
                    routers.reverse().forEach(it => (this.simstanceManager?.getOrNewSim(it.module) as any)?._onInitedChild());
                }
            })
        } else {
            // this.renderer.render('404 not found')
        }
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
