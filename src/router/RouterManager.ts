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
        let executeModule = this.simstanceManager?.getOrNewSim(this.option?.rootRouter)?.getExecuteModule(routers);
        if (!executeModule) {
            const notFound = rootRouter?.notFound(navigation?.pathInfo!);
            executeModule = new RouterModule(rootRouter, this.simstanceManager?.getOrNewSim(notFound?.module), notFound);
        }

        if (executeModule.module) {
            executeModule.router?.canActivate(navigation?.pathInfo!, executeModule).then(targetModule => {
                // console.log('targetModule==>', targetModule)
                if (targetModule) {
                    let lastRouterSelector = this.option?.selector;
                    // routerModule render
                    routers.forEach(it => {
                        const moduleObj = this.simstanceManager?.getOrNewSim(it.module?.module)
                        this.render(moduleObj, it.module?.stripWrap, document.querySelector(lastRouterSelector!));
                        const selctor = moduleObj?.router_outlet_selector || moduleObj?.selector
                        if (selctor) {
                            lastRouterSelector = selctor;
                        }
                    });
                    // if (typeof targetModule === 'function') {
                    //     targetModule = this.simstanceManager?.getOrNewSim(targetModule) as Module;
                    // }
                    // Module render
                    let module = targetModule instanceof RouterModule ? targetModule.module : this.simstanceManager?.getOrNewSim(targetModule.module)!;
                    let option = targetModule instanceof RouterModule ? targetModule.moduleOption : targetModule;
                    this.render(module, option?.stripWrap, document.querySelector(lastRouterSelector!));
                    this.renderd();
                    (targetModule.module as any)._onInitedChild();
                    routers.reverse().forEach(it => (this.simstanceManager?.getOrNewSim(it.module?.module) as any)?._onInitedChild());
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

    // public renderRouterModule(module: Module | undefined, stripWrap: boolean | undefined, targetSelector: Node | null): boolean {
    //     // console.log('renderRouterModule router --->', targetSelector)
    //     this.render(module, stripWrap, targetSelector);
    //     if (module && !module.exist()) {
    //         // (module as any)._onInit()
    //         // module.setScope(new TargetNode(targetSelector!, TargetNodeMode.child), stripWrap)
    //         // module.renderWrap();
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    public render(module: Module | undefined, stripWrap: boolean | undefined, targetSelector: Node | null): boolean {
        // console.log('render router --->', targetSelector)
        if (module) {
            (module as any)._onInit()
            module.setScope(new TargetNode(targetSelector!, TargetNodeMode.child), stripWrap)
            module.renderWrap();
            return true
        } else {
            return false
        }
    }
}
