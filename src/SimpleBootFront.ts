import {SimFrontOption} from './option/SimFrontOption';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {componentSelectors, getComponent} from './decorators/Component';
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
import {RawSet} from 'dom-render/rawsets/RawSet';
import {RawSetType} from 'dom-render/rawsets/RawSetType';
import {Render} from 'dom-render/rawsets/Render';
import {Config} from 'dom-render/configs/Config';
import {TargetAttr} from 'dom-render/configs/TargetAttr';
import {TargetElement} from 'dom-render/configs/TargetElement';
import {ScriptRunnable} from 'script/ScriptRunnable';
import {RouterModule} from 'simple-boot-core/route/RouterModule';
import {ComponentSet} from 'dom-render/components/ComponentSet';
import { DrThisAround } from './operators/DrThisAround';

export class SimpleBootFront extends SimpleApplication {
    navigation!: Navigation;
    public domRendoerExcludeProxy = [SimpleApplication, IntentManager, RouterManager, SimstanceManager, SimFrontOption, Navigation, ViewService, HttpService, HTMLElement];
    public domRenderTargetElements: TargetElement[] = [];
    public domRenderTargetAttrs: TargetAttr[] = [];
    public domRenderConfig: Config;

    constructor(public rootRouter: ConstructorType<any>, public option: SimFrontOption) {
        super(rootRouter, option);
        this.domRenderConfig = {
            routerType: 'none',
            window: option.window,
            targetElements: this.domRenderTargetElements,
            targetAttrs: this.domRenderTargetAttrs,
            onElementInit: (name: string, obj: any, rawSet: RawSet, targetElement: TargetElement) => {
            },
            onAttrInit: (attrName: string, attrValue: string, obj: any, rawSet: RawSet) => {
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
            eventVariables: {
            },
            proxyExcludeTyps: this.domRendoerExcludeProxy,
            operatorAround: {
                drThis: new DrThisAround()

            }
        };
        (this.option.window as any).__dirname = 'simple-boot-front__dirname';

        option.proxy = {
            onProxy: (it: any) => this.createDomRender(it)
        };
    }

    public getComponentInnerHtml(targetObj: any, id: string) {
        const component = getComponent(targetObj)
        const styles = RawSet.generateStyleTransform(component?.styles ?? [], id);
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
        const simstanceManager = super.run(otherInstanceSim);
        this.initDomRenderScripts();
        this.initDomRenderTargetElements();
        this.navigation = this.simstanceManager.getOrNewSim(Navigation)!
        this.domRenderConfig.eventVariables = {
            $router: this.navigation,
            $application: this
        }

        // this.navigation.domRenderConfig = this.domRenderConfig;
        // rootRouter first draw
        this.initWriteRootRouter();
        this.option.window.addEventListener('intent', (event) => {
            const cevent = event as CustomEvent
            this.publishIntent(new Intent(cevent.detail.uri, cevent.detail.data, event));
        });

        this.option.window.addEventListener('popstate', (event) => {
            const intent = new Intent(this.navigation.url || '/');
            this.routing<SimAtomic, any>(intent).then(it => {
                this.afterSetting();
            });
        });
        return simstanceManager;
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

    public writeRootRouter() {
        const routerAtomic = new SimAtomic(this.rootRouter, this.getSimstanceManager());
        const target = this.option.window.document.querySelector(this.option.selector);
        if (target && routerAtomic.value) {
            const id = 'root-router';
            const startEndPoint = RawSet.createStartEndPoint(target, id, RawSetType.TARGET_ELEMENT, this.domRenderConfig);
            target.innerHTML = '';
            target.appendChild(startEndPoint.start);
            target.insertAdjacentHTML('beforeend', this.getComponentInnerHtml(this.rootRouter, id));
            target.appendChild(startEndPoint.end);
        }
        return routerAtomic;
    }

    async goRouting(url: string) {
        this.navigation.goNoPopStateEvent(url);
        const intent = new Intent(this.navigation.url ?? '');
        const data = await this.routing<SimAtomic, any>(intent);
        this.afterSetting();
        return data;
    }

    async runRouting(otherInstanceSim?: Map<ConstructorType<any>, any>, url?: string): Promise<RouterModule<SimAtomic<Object>, any> | undefined> {
        const simstanceManager = this.initRun(otherInstanceSim);
        if (url) {
            this.navigation.goNoPopStateEvent(url);
        }
        const intent = new Intent(this.navigation.url ?? '');
        const data = await this.routing<SimAtomic, any>(intent);
        this.afterSetting();
        return data;
    }

    public run(otherInstanceSim?: Map<ConstructorType<any>, any>, url?: string) {
        const simstanceManager = this.initRun(otherInstanceSim);
        if (url) {
            this.navigation.go(url);
        }
        this.option.window.dispatchEvent(new Event('popstate'));
        return simstanceManager;
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
                (e, obj, r, counstructorParam) => {
                    let newSim;
                    if (counstructorParam?.length) {
                        newSim = new val(...counstructorParam);
                    } else {
                        newSim = this.simstanceManager.newSim(val);
                    }
                    return newSim
                },
                component?.template,
                component?.styles
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
