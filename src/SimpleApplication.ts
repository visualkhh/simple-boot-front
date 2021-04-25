import 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import {simstanceManager} from './simstance/SimstanceManager'
import {intentManager} from './intent/IntentManager'
import {ConstructorType} from './types/Types'
import {Router} from './module/Router'
import {Renderer} from './render/Renderer'
import {Module} from './module/Module'
import {fromEvent} from 'rxjs';
import {FunctionUtils} from './util/function/FunctionUtils';
import {LocationUtils} from './util/window/LocationUtils';

export class SimpleApplication {
    constructor(public rootRouter: ConstructorType<Router>, public selector = 'app') {
        intentManager.init();
        simstanceManager.init();
        Renderer.init(selector);
    }

    public async run(): Promise<SimpleApplication> {
        this.startRouting()
        return this
    }

    private startRouting() {
        fromEvent<any>(window, 'hashchange').subscribe((_) => this.executeRouter())
        window.dispatchEvent(new Event('hashchange'))
    }

    private executeRouter() {
        const routers: Router[] = [];
        const executeModule = simstanceManager.getOrNewSim(this.rootRouter)?.getExecuteModule(routers)
        if (executeModule) {
            // console.log('executeRouter-->', routers, executeModule)
            let lastRouterSelector = this.selector;
            routers.forEach(it => {
                this.renderRouterModule(it.moduleObject, lastRouterSelector);
                const selctor = it?.moduleObject?.router_outlet_selector || it?.moduleObject?.selector
                if (selctor) {
                    lastRouterSelector = selctor;
                }
            });
            this.render(executeModule, lastRouterSelector);
            this.renderd();
            (executeModule as any)._onInitedChild();
            routers.reverse().forEach(it => (it.moduleObject as any)?._onInitedChild());
        } else {
            Renderer.render('404 not found')
        }
    }

    private renderd() {
        const attr = 'router-active-class';
        this.procAttr(attr, (it, value) => {
            const actives = FunctionUtils.eval<string[]>(value ?? '[]')
            if (!actives) return;
            const hrefAttr = (it.getAttribute('href') ?? '').replace('#', '')
            if (hrefAttr === LocationUtils.hash()) {
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

    public renderRouterModule(module: Module | undefined, targetSelector = this.selector): boolean {
        if (module && !module.exist()) {
            (module as any)._onInit()
            module.renderWrap(targetSelector);
            // module.onChangedRendered()
            return true
        } else {
            return false
        }
    }

    public render(module: Module | undefined, targetSelector: string): boolean {
        if (module) {
            (module as any)._onInit()
            module.renderWrap(targetSelector);
            // module.onChangedRendered()
            return true
        } else {
            return false
        }
    }
}
