import 'reflect-metadata'
import {fromEvent} from 'rxjs';
import {SimstanceManager} from '../simstance/SimstanceManager';
import {Runnable} from '../run/Runnable';
import {FunctionUtils} from '../util/function/FunctionUtils';
import {Module} from '../module/Module';
import {SimOption} from '../option/SimOption';
import {Navigation} from '../service/Navigation';
import {Router} from './Router';
import {RouterModule} from './RouterModule';
import {TargetNode, TargetNodeMode} from '../render/compile/RootScope';

export class RouterManager implements Runnable {

    constructor(private option: SimOption, private simstanceManager: SimstanceManager) {
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
            const notFound = rootRouter?.notFound(navigation?.pathInfo!);
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
                        if (!document.querySelector(`[module-id='${moduleObj?.id}']`)) {
                            this.render(moduleObj, document.querySelector(lastRouterSelector!));
                        }
                        if (moduleObj?.router_outlet_id) {
                            lastRouterSelector = '#'+moduleObj?.router_outlet_id;
                        } else {
                            lastRouterSelector = '#'+moduleObj?.id;
                        }
                    });
                    // if (typeof targetModule === 'function') {
                    //     targetModule = this.simstanceManager?.getOrNewSim(targetModule) as Module;
                    // }
                    // Module render
                    let module = targetModule instanceof RouterModule ? targetModule.module : this.simstanceManager?.getOrNewSim(targetModule)!;
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

   public render(module: Module | undefined, targetSelector: Node | null): boolean {
        // console.log('render router --->', targetSelector)
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
