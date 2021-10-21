import { SimFrontOption } from './option/SimFrontOption';
import { ConstructorType } from 'simple-boot-core/types/Types';
import {
    ComponentConfig,
    ComponentMetadataKey,
    componentSelectors,
    getComponent,
} from './decorators/Component';
import {
    scripts
} from './decorators/Script';
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
import { SimGlobal } from 'simple-boot-core/global/SimGlobal';
import { RawSet, Render } from 'dom-render/RawSet';
import { Config, TargetElement, TargetAttr } from 'dom-render/Config';
import { ScriptRunnable } from 'script/ScriptRunnable';

export class SimpleBootFront extends SimpleApplication {
    navigation!: Navigation;
    public domRendoerExcludeProxy = [SimpleApplication, IntentManager, RouterManager, SimstanceManager, SimFrontOption, Navigation, ViewService, HttpService, HTMLElement];
    public domRenderTargetElements: TargetElement[] = [];
    public domRenderTargetAttrs: TargetAttr[] = [];
    public domRenderConfig: Config = {
        targetElements: this.domRenderTargetElements,
        targetAttrs: this.domRenderTargetAttrs,
        onAttrInit: (attrName: string, attrValue: string, obj: any) => {
            if (attrName === 'component') {
                const bindObj = ScriptUtils.evalReturn(attrValue, obj);
                (bindObj as any)?.onInit?.();
            }
        },
        scripts: {'application': this},
        applyEvents: [{
            attrName: 'router-link', callBack: (elements: Element, attrValue: string, obj: any) => {
                elements.addEventListener('click', (event) => {
                    SimGlobal().application.simstanceManager.getOrNewSim(Navigation)?.go(attrValue)
                })
            }
        }],
        proxyExcludeTyps: this.domRendoerExcludeProxy
    };
    constructor(public rootRouter: ConstructorType<any>, public option: SimFrontOption) {
        super(rootRouter, option);
        window.__dirname = 'simple-boot-front__dirname';
        // console.log('---sele-->', selectors, this.targetElements)
        this.domRenderTargetAttrs.push({
            name: 'component', callBack: (element: Element, attrValue: string, obj: any, rawSet: RawSet) => {
                const fag = this.option.window.document.createDocumentFragment();
                if (attrValue) {
                    const targetObj = ScriptUtils.eval(`return ${attrValue}`, obj)
                    const n = element.cloneNode(true) as Element;
                    const innerHTML = this.getComponentInnerHtml(targetObj);
                    n.innerHTML = innerHTML;
                    fag.append(RawSet.drThisCreate(n, attrValue, '', true, obj));
                }
                return fag;
            }
        });
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

    public run() {
        super.run();
        this.initDomRenderScripts();
        this.initDomRenderTargetElements();

        this.navigation = this.simstanceManager.getOrNewSim(Navigation)!
        // rootRouter는 처음한번 그려준다.
        const routerAtomic = new SimAtomic(this.rootRouter);
        const target = this.option.window.document.querySelector(this.option.selector)
        if (target && routerAtomic.value) {
            const component = routerAtomic.getConfig<ComponentConfig>(ComponentMetadataKey)
            const template = this.option.window.document.createElement('template')
            const styles = (component?.styles?.map(it => `<style>${it}</style>`) ?? []).join(' ')
            target.innerHTML = `${styles} ${component?.template ?? ''}`;
            const val = routerAtomic.value;
            const domRenderProxy = val._DomRender_proxy as DomRenderProxy<any>
            domRenderProxy.initRender(target);
            (val as any)?.onInit?.();
        }
        // new Event('mouseleave', { bubbles: true, cancelable: true });
        this.option.window.addEventListener('intent', (event) => {
            const cevent = event as CustomEvent
            this.publishIntent(new Intent(cevent.detail.uri, cevent.detail.data, event));
        });
        this.option.window.addEventListener('popstate', (event) => {
            const intent = new Intent(this.navigation.path ?? '');
            this.routing<SimAtomic, any>(intent).then(async it => {
                this.afterSetting();
            })
        })
        this.option.window.dispatchEvent(new Event('popstate'))
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
                let obj: any = undefined;
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
            this.domRenderTargetElements.push(RawSet.createComponentTargetElement(name, (e, o, r) => this.simstanceManager.newSim(val), component?.template, component?.styles, this.domRenderConfig.scripts));
        });
    }
}
