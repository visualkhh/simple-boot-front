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
    private simstanceManager?: SimstanceManager;
    private option?: SimOption;

    constructor() {
    }

    public run(option: SimOption, simstanceManager: SimstanceManager) {
        this.option = option;
        this.simstanceManager = simstanceManager;
        fromEvent<any>(window, 'popstate').subscribe((_) => {
            this.executeRouter()
        })
        window.dispatchEvent(new Event('popstate'))
    }

    public executeRouter() {
        const routers: Router[] = [];
        const navigation = this.simstanceManager?.getOrNewSim(Navigation);
        const rootRouter = this.simstanceManager?.getOrNewSim(this.option?.rootRouter);
        const executeModule = this.simstanceManager?.getOrNewSim(this.option?.rootRouter)?.getExecuteModule(routers) || new RouterModule(rootRouter, this.simstanceManager?.getOrNewSim(rootRouter?.notFound(navigation?.pathInfo!)))
        if (executeModule && executeModule.module) {
            executeModule.router?.canActivate(navigation?.pathInfo!, executeModule.module).then(targetModule => {
                if (targetModule) {
                    let lastRouterSelector = this.option?.selector;
                    // routerModule render
                    routers.forEach(it => {
                        this.renderRouterModule(it.moduleObject, document.querySelector(lastRouterSelector!));
                        const selctor = it?.moduleObject?.router_outlet_selector || it?.moduleObject?.selector
                        if (selctor) {
                            lastRouterSelector = selctor;
                        }
                    });
                    if (typeof targetModule === 'function') {
                        targetModule = this.simstanceManager?.getOrNewSim(targetModule) as Module;
                    }
                    // Module render
                    this.render(targetModule, document.querySelector(lastRouterSelector!));
                    this.renderd();
                    (targetModule as any)._onInitedChild();
                    routers.reverse().forEach(it => (it.moduleObject as any)?._onInitedChild());
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

    public renderRouterModule(module: Module | undefined, targetSelector: Node | null): boolean {
        // console.log('renderRouterModule router --->', targetSelector)
        if (module && !module.exist()) {
            this.render(module, targetSelector);
            // (module as any)._onInit()
            // module.renderWrap(targetSelector);
            return true
        } else {
            return false
        }
    }

    public render(module: Module | undefined, targetSelector: Node | null): boolean {
        // console.log('render router --->', targetSelector)
        if (module) {
            (module as any)._onInit()
            module.setScope(new TargetNode(targetSelector!, TargetNodeMode.child))
            module.renderWrap();
            return true
        } else {
            return false
        }
    }
}
