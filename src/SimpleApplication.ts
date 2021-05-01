import 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import {ConstructorType} from './types/Types'
import {Router} from './module/Router'
import {Module} from './module/Module'
import {fromEvent} from 'rxjs';
import {FunctionUtils} from './util/function/FunctionUtils';
import {LocationUtils} from './util/window/LocationUtils';
import {SimOption, UrlType} from './option/SimOption';
import {SimstanceManager} from './simstance/SimstanceManager';
import {SimGlobal} from './global/SimGlobal';
import {Runnable} from './run/Runnable';
import {IntentManager} from './intent/IntentManager';
import {Navigation} from './service/Navigation';

export class SimpleApplication implements Runnable {
    public simstanceManager: SimstanceManager;
    public intentManager: IntentManager;
    private rootRouter: ConstructorType<Router> | undefined;
    private option: SimOption;
    constructor(_option = new SimOption()) {
        this.option = Object.assign(new SimOption(), _option)
        this.simstanceManager = new SimstanceManager(this.option);
        this.intentManager = new IntentManager();
        SimGlobal.application = this;
    }

    public run(rootRouter: ConstructorType<Router>) {
        this.simstanceManager.run();
        this.intentManager.run(this.simstanceManager);
        this.rootRouter = rootRouter;
        this.startRouting()
    }

    public startRouting() {
        // window.onpopstate = function(event:any) {
        //     console.log('location: ' + document.location + ', state: ' + JSON.stringify(event.state));
        // };
        // window.addEventListener('locationchange', function() {
        //     console.log('location changed!');
        // })
        // fromEvent<any>(window, 'locationchange').subscribe((_) => {
        //     console.log('-->')
        // })
        // fromEvent<any>(window, 'locationchange').subscribe((_) => {
        //     console.log('-dd---');
        // })
        // fromEvent<any>(history, 'pushState').subscribe((_) => {
        //     console.log('-history pushState---');
        // })
        fromEvent<any>(window, 'popstate').subscribe((_) => {
            // console.log('--popstate--');
            this.executeRouter()
        })
        window.dispatchEvent(new Event('popstate'))
    }

    public executeRouter() {
        const routers: Router[] = [];
        const executeModule = this.simstanceManager.getOrNewSim(this.rootRouter)?.getExecuteModule(routers)
        // const executeModule = this.rootRouter?.getExecuteModule(routers)
        if (executeModule) {
            // console.log('executeRouter-->', routers, executeModule)
            let lastRouterSelector = this.option.selector;
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
            // this.renderer.render('404 not found')
        }
    }

    public renderd() {
        const attr = 'router-active-class';
        const navigation = this.simstanceManager.getOrNewSim(Navigation);
        this.procAttr(attr, (it, value) => {
            const actives = FunctionUtils.eval<string[]>(value ?? '[]')
            if (!actives) return;
            // const hrefAttr = (it.getAttribute('href') ?? '').replace('#', '')
            const hrefAttr = (it.getAttribute('router-link') ?? '')
            if (hrefAttr === navigation?.url) {
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

    public renderRouterModule(module: Module | undefined, targetSelector = this.option.selector): boolean {
        if (module && !module.exist()) {
            (module as any)._onInit()
            module.renderWrap(targetSelector);
            return true
        } else {
            return false
        }
    }

    public render(module: Module | undefined, targetSelector: string): boolean {
        if (module) {
            (module as any)._onInit()
            module.renderWrap(targetSelector);
            return true
        } else {
            return false
        }
    }
}
