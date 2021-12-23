import { SimFrontOption } from './option/SimFrontOption';
import { ConstructorType } from 'simple-boot-core/types/Types';
import {
    ComponentConfig,
    ComponentMetadataKey,
    componentSelectors,
    getComponent
} from './decorators/Component';
import { scripts } from './decorators/Script';
import { DomRender } from 'dom-render/DomRender';
import { SimAtomic } from 'simple-boot-core/simstance/SimAtomic';
import { SimpleApplication } from 'simple-boot-core/SimpleApplication';
import { Intent } from 'simple-boot-core/intent/Intent';
import { Navigation } from './service/Navigation';
import { ViewService } from './service/view/ViewService';
import { HttpService } from './service/HttpService';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';
import { IntentManager } from 'simple-boot-core/intent/IntentManager';
import { RouterManager } from 'simple-boot-core/route/RouterManager';
import { DomRenderProxy } from 'dom-render/DomRenderProxy';
import { ScriptUtils } from 'dom-render/utils/script/ScriptUtils';
import { RawSet, Render } from 'dom-render/RawSet';
import { Config, TargetElement, TargetAttr } from 'dom-render/Config';
import { ScriptRunnable } from 'script/ScriptRunnable';
import { RouterMetadataKey } from 'simple-boot-core/decorators/SimDecorator';
import { OnInitParameter } from 'lifecycle/OnInit';
import { DomRenderFinalProxy } from 'dom-render/types/Types';
import { OnDoneRoute } from './route/OnDoneRoute';

export class SimpleBootFront extends SimpleApplication {
    navigation!: Navigation;
    public domRendoerExcludeProxy = [SimpleApplication, IntentManager, RouterManager, SimstanceManager, SimFrontOption, Navigation, ViewService, HttpService, HTMLElement];
    public domRenderTargetElements: TargetElement[] = [];
    public domRenderTargetAttrs: TargetAttr[] = [];
    public onDoneRouteSubject = new Map<OnDoneRoute, any[]>();
    public domRenderConfig: Config;

    constructor(public rootRouter: ConstructorType<any>, public option: SimFrontOption) {
        super(rootRouter, option);
        this.domRenderConfig = {
            window: option.window,
            targetElements: this.domRenderTargetElements,
            targetAttrs: this.domRenderTargetAttrs,
            onElementInit: (name: string, obj: any, rawSet: RawSet, targetElement: TargetElement) => {
                targetElement?.__render?.component?.onInit?.(rawSet);
            },
            onAttrInit: (attrName: string, attrValue: string, obj: any, rawSet: RawSet) => {
                if (attrName === 'component') {
                    const bindObj = ScriptUtils.evalReturn(attrValue, obj);
                    // console.log('--------->', attrName, attrValue, obj);
                    (bindObj as any)?.onInit?.(DomRenderFinalProxy.final({makerObj: obj, rawSet}) as OnInitParameter);
                }
            },
            scripts: {application: this},
            applyEvents: [{
                attrName: 'router-link',
                callBack: (elements: Element, attrValue: string, obj: any) => {
                    elements.addEventListener('click', (event) => {
                        this.getSimstanceManager().getOrNewSim(Navigation)?.go(attrValue)
                        // SimGlobal().application.simstanceManager.getOrNewSim(Navigation)?.go(attrValue)
                    })
                }
            }],
            proxyExcludeTyps: this.domRendoerExcludeProxy
        };

        (this.option.window as any).__dirname = 'simple-boot-front__dirname';
        // console.log('---sele-->', selectors, this.targetElements)
        this.domRenderTargetAttrs.push({
            name: 'component',
            callBack: (element: Element, attrValue: string, obj: any, rawSet: RawSet) => {
                // console.log('---?', element, attrValue, obj, rawSet)
                const fag = this.option.window.document.createDocumentFragment();
                if (attrValue) {
                    const targetObj = ScriptUtils.eval(`return ${attrValue}`, obj)
                    const n = element.cloneNode(true) as Element;
                    const innerHTML = this.getComponentInnerHtml(targetObj);
                    n.innerHTML = innerHTML;
                    fag.append(RawSet.drThisCreate(n, attrValue, '', true, obj, this.option));
                }
                return fag;
            }
        });
        option.proxy = {
            onProxy: (it: any) => this.createDomRender(it)
        };
    }


    public regDoneRouteCallBack(callBackObj: OnDoneRoute) {
        this.onDoneRouteSubject.set(callBackObj, []);
    }
    public pushDoneRouteCallBack(callBackObj: OnDoneRoute, param: any) {
        let newVar = this.onDoneRouteSubject.get(callBackObj);
        if (!newVar) {
            newVar = [];
            this.onDoneRouteSubject.set(callBackObj, newVar);
        }
        newVar?.push(param);
    }
    // public removeDoneRouteCallBack(callBackObj: OnDoneRoute, param: any) {
    //     let newVar = this.onDoneRouteSubject.get(callBackObj);
    //     if (newVar) {
    //         const index = newVar.indexOf(param);
    //         if (index > -1) {
    //             newVar.splice(index, 1);
    //         }
    //     }
    // }

    public getComponentInnerHtml(targetObj: any) {
        const component = getComponent(targetObj)
        const styles = (component?.styles?.map(it => `<style>${it}</style>`) ?? []).join(' ');
        const template = (component?.template ?? '');
        return styles + template;
    }

    public createDomRender<T extends object>(obj: T): T {
        const component = getComponent(obj);
        if (component && typeof obj === 'object') {
            return DomRender.run(obj, undefined, this.domRenderConfig);
        }
        return obj;
    }

    public run(otherInstanceSim?: Map<ConstructorType<any>, any>): SimpleBootFront {
        super.run(otherInstanceSim);
        this.initDomRenderScripts();
        this.initDomRenderTargetElements();

        this.navigation = this.simstanceManager.getOrNewSim(Navigation)!
        // rootRouter는 처음한번 그려준다.
        const routerAtomic = new SimAtomic(this.rootRouter, this.getSimstanceManager());
        const target = this.option.window.document.querySelector(this.option.selector)
        if (target && routerAtomic.value) {
            const component = routerAtomic.getConfig<ComponentConfig>(ComponentMetadataKey)
            const template = this.option.window.document.createElement('template')
            const styles = (component?.styles?.map(it => `<style>${it}</style>`) ?? []).join(' ')
            target.innerHTML = `${styles} ${component?.template ?? ''}`;
            const val = routerAtomic.value;
            const domRenderProxy = val._DomRender_proxy as DomRenderProxy<any>
            domRenderProxy.initRender(target);
            // console.log('onInit-----?', val);
            (val as any)?.onInit?.();
        }

        // new Event('mouseleave', { bubbles: true, cancelable: true });
        this.option.window.addEventListener('intent', (event) => {
            const cevent = event as CustomEvent
            this.publishIntent(new Intent(cevent.detail.uri, cevent.detail.data, event));
        });

        this.option.window.addEventListener('popstate', (event) => {
            // const intent = new Intent(this.navigation.path ?? '');
            const intent = new Intent(this.navigation.url ?? '');
            // this.simstanceManager.getSimAtomics().filter(it => it.getConfig(RouterMetadataKey)).forEach(it => {
            //     console.log('--------------', it)
            // })
            this.routing<SimAtomic, any>(intent).then(it => {
                this.afterSetting();
                this.onDoneRouteSubject.forEach((val, key) => {
                    console.log('doneRoute Subject length->', val.length)
                    while (val.length) {
                        key.onDoneRoute(val.pop());
                    }
                });
            });
        });

        this.option.window.dispatchEvent(new Event('popstate'));
        return this;
    }

    private afterSetting() {
        this.option.window.document.querySelectorAll('[router-link]').forEach(it => {
            const link = it.getAttribute('router-link');
            if (link) {
                const activeClasss = it.getAttribute('router-active-class');
                const aClasss = activeClasss?.split(',');
                const inActiveClasss = it.getAttribute('router-inactive-class');
                const iClasss = inActiveClasss?.split(',');
                if (this.navigation.path === link) {
                    if (aClasss && aClasss.length > 0) {
                        it.classList.add(...aClasss);
                    }
                    if (iClasss && iClasss.length > 0) {
                        it.classList.remove(...iClasss);
                    }
                } else {
                    if (aClasss && aClasss.length > 0) {
                        it.classList.remove(...aClasss);
                    }
                    if (iClasss && iClasss.length > 0) {
                        it.classList.add(...iClasss);
                    }
                }
            }
        });
    }

    public initDomRenderScripts() {
        const simstanceManager = this.simstanceManager;
        scripts.forEach((val, name) => {
            this.domRenderConfig.scripts![name] = function(...args: any) {
                let obj: any;
                try {
                    obj = simstanceManager.getOrNewSim(val);
                } catch (e) {
                    obj = simstanceManager.newSim(val)
                }
                const render = this.__render as Render;
                const scriptRunnable = obj as ScriptRunnable;
                scriptRunnable.rawSets.set(render.rawset, this);
                return scriptRunnable.run(...args);
            }
        })
    }

    private initDomRenderTargetElements() {
        const selectors = componentSelectors;
        selectors.forEach((val, name) => {
            const component = getComponent(val);
            const items = RawSet.createComponentTargetElement(
                name,
                (e, o, r) => {
                    const newSim = this.simstanceManager.newSim(val);
                    // newSim?.onInit?.();
                    return newSim
                },
                component?.template,
                component?.styles,
                this.domRenderConfig.scripts,
                this.domRenderConfig
                // ,
                // (target: Element, obj: any, rawSet: RawSet) => {
                //     (items as any).render?.component?.onInit?.();
                // }
            );

            // items.complete = (target: Element, obj: any, rawSet: RawSet) => {
            //     (items as any).render?.component?.onInit?.();
            // }
            this.domRenderTargetElements.push(items);
        });
    }

    public getSimstanceManager() {
        return this.simstanceManager;
    }
    public go(url: string) {
        this.getSimstanceManager().getOrNewSim(Navigation)?.go(url);
    }
}
