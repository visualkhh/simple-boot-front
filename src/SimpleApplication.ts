import 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import {ConstructorType} from './types/Types'
import {Router} from './module/Router'
import {Module} from './module/Module'
import {fromEvent} from 'rxjs';
import {FunctionUtils} from './util/function/FunctionUtils';
import {LocationUtils} from './util/window/LocationUtils';
import {SimOption} from './option/SimOption';
import {SimstanceManager} from './simstance/SimstanceManager';

export const SimpleApplication = new class {
    public simstanceManager = new SimstanceManager();
    // private renderer?: Renderer;
    // public static instance: SimpleApplication;
    public rootRouter: ConstructorType<Router> | undefined;
    public option = new SimOption();
    constructor() {
    }

    public run(rootRouter: ConstructorType<Router>, option = new SimOption()) {
        this.rootRouter = rootRouter;
        this.option = option;
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

        fromEvent<any>(window, 'locationchange').subscribe((_) => {
            // console.log('-dd---');
        })
        // fromEvent<any>(history, 'pushState').subscribe((_) => {
        //     console.log('-history pushState---');
        // })
        fromEvent<any>(window, 'popstate').subscribe((_) => {
            // console.log('--popstate--');
            this.executeRouter()
        })
        if (this.option?.urlType === 'hash') {
            // fromEvent<any>(window, 'hashchange').subscribe((_) => {
            //     console.log('-hashChange---');
            // })
        } else if (this.option?.urlType === 'path') {
            // https://stackoverflow.com/questions/6390341/how-to-detect-if-url-has-changed-after-hash-in-javascript
            // this.originPushState = history.pushState;
            // console.log('old->', this.originPushState)
            // history.pushState = (data: any, title: string, url?: string | null) => {
            //     console.log(data, title, url, 'old2->', this.originPushState)
            //     this.originPushState(data, title, url);
            //     console.log('push stata');
            // }
            history.pushState = (f => {
                return (data: any, title: string, url?: string | null) => {
                    console.log(data, title, url, 'old2->', f)
                    f(data, title, url);
                    window.dispatchEvent(new Event('pushstate'));
                    window.dispatchEvent(new Event('locationchange'));
                }
                // var ret = f.apply(this, arguments);
                // return f;
            })(history.pushState);
        }
        window.dispatchEvent(new Event('popstate'))
    }

    public executeRouter() {
        const routers: Router[] = [];
        const executeModule = this.simstanceManager.getOrNewSim(this.rootRouter)?.getExecuteModule(routers)
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
}()
// export const global = {
//     application: undefined | SimpleApplication
// }
