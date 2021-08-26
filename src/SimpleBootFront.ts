import { SimFrontOption } from './option/SimFrontOption';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { ComponentConfig, ComponentMetadataKey, getComponent } from './decorators/Component';
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
import { RawSet } from '../libs/dom-render/src/RawSet';

export class SimpleBootFront extends SimpleApplication {
    navigation!: Navigation;
    public domRendoerExcludeProxy = [SimpleApplication, IntentManager, RouterManager, SimstanceManager, SimFrontOption, Navigation, ViewService, HttpService];

    constructor(public rootRouter: ConstructorType<any>, public option: SimFrontOption) {
        super(rootRouter, option);
        window.__dirname = 'simple-boot-front__dirname';
        option.proxy = {
            onProxy: (it: any) => this.createDomRender(it)
        };
    }

    public createDomRender<T extends object>(obj: T): T {
        const component = getComponent(obj);
        if (component && typeof obj === 'object') {
            return DomRender.run(obj, undefined, {
                targets: [{
                    attrName: 'component', callBack: (element: Element, attrValue: string, obj: any) => {
                        const fag = this.option.window.document.createDocumentFragment();
                        if (attrValue) {
                            const targetObj = ScriptUtils.eval(`return ${attrValue}`, obj)
                            const component = getComponent(targetObj)
                            const styles = (component?.styles?.map(it => `<style>${it}</style>`) ?? []).join(' ');
                            const template = (component?.template ?? '');
                            const n = element.cloneNode(true) as Element;
                            const innerHTML = styles + template;
                            n.innerHTML = innerHTML;
                            fag.append(RawSet.drThisCreate(n, attrValue, '', true, obj));
                            // const template = (component?.template ?? '').replace(/this/g, attrValue);
                            // if (component) {
                            //     ScriptUtils.eval(`
                            //     const n = this.__element.cloneNode(true);
                            //     n.innerHTML = this.innerHTML;
                            //     Array.from(n.childNodes).forEach(it => this.__fag.append(it));
                            //     `, {__fag: fag, __element: element, innerHTML});
                            // }
                        }
                        // console.log('component->>>>scan->' , element, attrValue, obj, fag)
                        return fag;
                    }
                }],
                applyEvents: [{
                    attrName: 'router-link', callBack: (elements: Element, attrValue: string, obj: any) => {
                        elements.addEventListener('click', (event) => {
                            SimGlobal().application.simstanceManager.getOrNewSim(Navigation)?.go(attrValue)
                        })
                    }
                }],
                proxyExcludeTyps: this.domRendoerExcludeProxy
            });
        }
        return obj;
    }

    public run() {
        super.run();
        this.navigation = this.simstanceManager.getOrNewSim(Navigation)!
        // rootRouter는 처음한번 그려준다.
        const routerAtomic = new SimAtomic(this.rootRouter);
        const target = this.option.window.document.querySelector(this.option.selector)
        if (target && routerAtomic.value) {
            // console.log('target-->', routerAtomic.value)
            const component = routerAtomic.getConfig<ComponentConfig>(ComponentMetadataKey)
            const template = this.option.window.document.createElement('template')
            // template.innerHTML = `<style>${component?.styles ?? ''}</style> ${component?.template ?? ''}`;
            const styles = (component?.styles?.map(it => `<style>${it}</style>`) ?? []).join(' ')
            target.innerHTML = `${styles} ${component?.template ?? ''}`;
            const domRenderProxy = routerAtomic.value._DomRender_proxy as DomRenderProxy<any>
            domRenderProxy.initRender(target);
            // console.log('--->', template.content.childNodes)
            // domRenderProxy.initRender(template.content);

            // target.innerHTML = '';
            // target.append(template.content)
            // console.log('--->', template.content.childNodes)
            // console.log('--->', target.childNodes)
            // console.log('routeratomic value=>', component, domRenderProxy)
        }
        this.option.window.addEventListener('popstate', (event) => {
            const intent = new Intent(this.navigation.path ?? '');
            this.routing<SimAtomic, any>(intent).then(async it => {
                if (it?.routerChains?.length && it?.routerChains?.length > 0) {
                    it?.routerChains?.reduce?.((a, b) => {
                        const value = a.value! as any;
                        value?.canActivate?.(intent, b.value);
                        return b;
                    });
                }
                // 페이지 찾지못했을시.
                if (!it?.module) {
                    const routerChain = it?.routerChains[it.routerChains.length - 1] as any;
                    routerChain?.value?.canActivate?.(intent, it?.getModuleInstance());
                } else { // 페이지 찾았을시
                    (it.router?.value! as any)?.canActivate?.(intent, it.getModuleInstance());
                }
                this.afterSetting();
            })
        })
        this.option.window.dispatchEvent(new Event('popstate'))
    }

    private afterSetting() {
        this.option.window.document.querySelectorAll('[router-active-class]').forEach(it => {
            const link = it.getAttribute('router-link') ?? '';
            const activeClasss = it.getAttribute('router-active-class') ?? '';
            const classs = activeClasss.split(',');
            if (this.navigation.path === link) {
                it.classList.add(...classs);
            } else {
                it.classList.remove(...classs);
            }
        });
    }
}
