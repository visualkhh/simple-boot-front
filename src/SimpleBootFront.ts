import {SimFrontOption} from './option/SimFrontOption';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {ComponentConfig, ComponentMetadataKey, componentSelectors, getComponent} from './decorators/Component';
import {scripts} from './decorators/Script';
import {DomRender} from 'dom-render/DomRender';
import {SimAtomic} from 'simple-boot-core/simstance/SimAtomic';
import {SimpleApplication} from 'simple-boot-core/SimpleApplication';
import {Intent} from 'simple-boot-core/intent/Intent';
import {Navigation} from './service/Navigation';
import {ViewService} from './service/view/ViewService';
import {HttpService} from './service/HttpService';
import {SimstanceManager} from 'simple-boot-core/simstance/SimstanceManager';
import {IntentManager} from 'simple-boot-core/intent/IntentManager';
import {RouterManager} from 'simple-boot-core/route/RouterManager';
import {DomRenderProxy} from 'dom-render/DomRenderProxy';
import {ScriptUtils} from 'dom-render/utils/script/ScriptUtils';
import {RawSet, Render} from 'dom-render/RawSet';
import {Config, TargetElement, TargetAttr} from 'dom-render/Config';
import {ScriptRunnable} from 'script/ScriptRunnable';
import {DomRenderFinalProxy} from 'dom-render/types/Types';
import {SaveInjectConfig} from 'simple-boot-core/decorators/inject/Inject';
import {InjectFrontSituationType} from './decorators/inject/InjectFrontSituationType';
import {FirstCheckMaker} from 'simple-boot-core/simstance/SimstanceManager';
import {RouterModule} from 'simple-boot-core/route/RouterModule';

export class SimpleBootFront extends SimpleApplication {
    navigation!: Navigation;
    public domRendoerExcludeProxy = [SimpleApplication, IntentManager, RouterManager, SimstanceManager, SimFrontOption, Navigation, ViewService, HttpService, HTMLElement];
    public domRenderTargetElements: TargetElement[] = [];
    public domRenderTargetAttrs: TargetAttr[] = [];
    public domRenderConfig: Config;

    constructor(public rootRouter: ConstructorType<any>, public option: SimFrontOption) {
        super(rootRouter, option);
        this.domRenderConfig = {
            window: option.window,
            targetElements: this.domRenderTargetElements,
            targetAttrs: this.domRenderTargetAttrs,
            onElementInit: (name: string, obj: any, rawSet: RawSet, targetElement: TargetElement) => {
                const target = targetElement?.__render?.component;
                const targetKey = 'onInit';
                const firstCheckMaker: FirstCheckMaker[] = [(ownerObj: { target: Object, targetKey?: string | symbol }, type: ConstructorType<any>, idx: number, saveInjectionConfig?: SaveInjectConfig) => {
                    if (InjectFrontSituationType.OPENER === saveInjectionConfig?.config.situationType && rawSet.point.thisVariableName) {
                        return new Proxy(ScriptUtils.evalReturn(rawSet.point.thisVariableName, obj), new DomRenderFinalProxy())
                    }
                }]
                if (rawSet.point.thisVariableName) {
                    target?.onInit?.(...this.simstanceManager.getParameterSim({target, targetKey, firstCheckMaker: firstCheckMaker})); // .concat(this.elementAndComponentOnInitFirstCheckMakers)
                } else {
                    target?.onInit?.(...this.simstanceManager.getParameterSim({target, targetKey, firstCheckMaker: firstCheckMaker})); // .concat(this.elementAndComponentOnInitFirstCheckMakers)
                }
            },
            onAttrInit: (attrName: string, attrValue: string, obj: any, rawSet: RawSet) => {
                if (attrName === 'component') {
                    const target = ScriptUtils.evalReturn(attrValue, obj) as any;
                    const targetKey = 'onInit';
                    const firstCheckMaker: FirstCheckMaker[] = [(obj: { target: Object, targetKey?: string | symbol }, type: ConstructorType<any>, idx: number, saveInjectionConfig?: SaveInjectConfig) => {
                        if (InjectFrontSituationType.OPENER === saveInjectionConfig?.config.situationType && target?.__domrender_component_new?.creator) {
                            return target?.__domrender_component_new?.creator;
                        }
                    }];
                    if (rawSet.point.thisVariableName) {
                        target?.onInit?.(...this.simstanceManager.getParameterSim({target, targetKey, firstCheckMaker: firstCheckMaker})); // .concat(this.elementAndComponentOnInitFirstCheckMakers)
                    } else {
                        target?.onInit?.(...this.simstanceManager.getParameterSim({target, targetKey, firstCheckMaker: firstCheckMaker})); // .concat(this.elementAndComponentOnInitFirstCheckMakers)
                    }
                }
            },
            scripts: {application: this},
            applyEvents: [{
                attrName: 'router-link',
                callBack: (elements: Element, attrValue: string, obj: any) => {
                    elements.addEventListener('click', (event) => {
                        this.getSimstanceManager().getOrNewSim(Navigation)?.go(attrValue)
                    })
                }
            }],
            proxyExcludeTyps: this.domRendoerExcludeProxy
        };

        (this.option.window as any).__dirname = 'simple-boot-front__dirname';

        const targetAttribute = RawSet.createComponentTargetAttribute(
            'component',
            (element: Element, attrValue: string, obj: any, rawSet: RawSet) => {
                return ScriptUtils.eval(`return ${attrValue}`, obj);
            },
            (element: Element, attrValue: string, obj: any, rawSet: RawSet) => {
                if (attrValue) {
                    const targetObj = ScriptUtils.eval(`return ${attrValue}`, obj)
                    const n = element.cloneNode(true) as Element;
                    const innerHTML = this.getComponentInnerHtml(targetObj);
                    n.innerHTML = innerHTML;
                    return RawSet.drThisCreate(n, attrValue, '', true, obj, this.option);
                }
                const fag = this.option.window.document.createDocumentFragment();
                return fag;
            }
        );
        this.domRenderTargetAttrs.push(targetAttribute);
        option.proxy = {
            onProxy: (it: any) => this.createDomRender(it)
        };
    }

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

    private initRun(otherInstanceSim?: Map<ConstructorType<any>, any>) {
        super.run(otherInstanceSim);
        this.initDomRenderScripts();
        this.initDomRenderTargetElements();

        this.navigation = this.simstanceManager.getOrNewSim(Navigation)!
        // rootRouter first draw
        this.initWriteRootRouter();
        this.option.window.addEventListener('intent', (event) => {
            const cevent = event as CustomEvent
            this.publishIntent(new Intent(cevent.detail.uri, cevent.detail.data, event));
        });

        this.option.window.addEventListener('popstate', (event) => {
            const intent = new Intent(this.navigation.url ?? '');
            this.routing<SimAtomic, any>(intent).then(it => {
                this.afterSetting();
            });
        });
    }

    public initWriteRootRouter() {
        const routerAtomic = this.writeRootRouter();
        const target = this.option.window.document.querySelector(this.option.selector);
        if (target && routerAtomic && routerAtomic.value) {
            const val = routerAtomic.value as any;
            const domRenderProxy = val._DomRender_proxy as DomRenderProxy<any>
            domRenderProxy.initRender(target);
            (val as any)?.onInit?.();
        }
    }
    // public rootRouterComponentHTML() {
    //     const routerAtomic = new SimAtomic(this.rootRouter, this.getSimstanceManager());
    //     const target = this.option.window.document.querySelector(this.option.selector)
    //     const component = routerAtomic.getConfig<ComponentConfig>(ComponentMetadataKey)
    //     const styles = (component?.styles?.map(it => `<style>${it}</style>`) ?? []).join(' ')
    //     return `${styles} ${component?.template ?? ''}`;
    // }

    public writeRootRouter() {
        const routerAtomic = new SimAtomic(this.rootRouter, this.getSimstanceManager());
        const target = this.option.window.document.querySelector(this.option.selector);
        if (target && routerAtomic.value) {
            const component = routerAtomic.getConfig<ComponentConfig>(ComponentMetadataKey)
            const styles = (component?.styles?.map(it => `<style>${it}</style>`) ?? []).join(' ')
            target.innerHTML = `${styles} ${component?.template ?? ''}`;
        }
        return routerAtomic;
    }

// routing<R = SimAtomic, M = any>(intent: Intent) {
    //     return super.routing<R, M>(intent);
    // }

    async goRouting(url: string) {
        this.navigation.goNoPopStateEvent(url);
        const intent = new Intent(this.navigation.url ?? '');
        const data = await this.routing<SimAtomic, any>(intent);
        this.afterSetting();
        return data;
    }

    async runRouting(otherInstanceSim?: Map<ConstructorType<any>, any>, url?: string): Promise<RouterModule<SimAtomic<Object>, any> | undefined> {
        this.initRun(otherInstanceSim);
        if (url) {
            this.navigation.goNoPopStateEvent(url);
        }
        const intent = new Intent(this.navigation.url ?? '');
        const data = await this.routing<SimAtomic, any>(intent);
        this.afterSetting();
        return data;
    }

    public run(otherInstanceSim?: Map<ConstructorType<any>, any>, url?: string) {
        this.initRun(otherInstanceSim);
        if (url) {
            this.navigation.go(url);
        }
        this.option.window.dispatchEvent(new Event('popstate'));
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
            this.domRenderConfig.scripts![name] = function (...args: any) {
                let obj: any;
                try {
                    obj = simstanceManager.getOrNewSim(val);
                } catch (e) {
                    obj = simstanceManager.newSim(val)
                }
                const render = this.__render as Render;
                const scriptRunnable = obj as ScriptRunnable;
                if (render.rawset) {
                    scriptRunnable.rawSets.set(render.rawset, this);
                }
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
                (e, obj, r) => {
                    const newSim = this.simstanceManager.newSim(val);
                    return newSim
                },
                component?.template,
                component?.styles,
                this.domRenderConfig
            );

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
