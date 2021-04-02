import 'rxjs/Observable'
import {simstanceManager} from './simstance/SimstanceManager'
import {ConstructorType} from './types/Types'
import {Router} from './module/Router'
import {Renderer} from './render/Renderer'
import {Module} from './module/Module'
import {fromEvent} from 'rxjs';
export class SimpleApplication {
    constructor(public rootRouter: ConstructorType<Router>) {
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
            let lastRouterSelector = 'app';
            routers.forEach(it => {
                this.renderRouterModule(it.moduleObject, lastRouterSelector);
                const selctor = it?.moduleObject?.router_outlet_selector || it?.moduleObject?.selector
                if (selctor) {
                    lastRouterSelector = selctor;
                }
            });
            this.render(executeModule, lastRouterSelector);
            (executeModule as any)._onInitedChiled();
            routers.reverse().forEach(it => (it.moduleObject as any)?._onInitedChiled());
        } else {
            Renderer.render('404 not found')
        }
    }

    public renderRouterModule(module: Module | undefined, targetSelector = 'app'): boolean {
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
