import {Renderer} from '../render/Renderer'
import {LifeCycle} from '../module/LifeCycle'
import {fromEvent} from 'rxjs';
import {View} from '../service/view/View'
import {RandomUtils} from '../util/random/RandomUtils'
import {SimBase} from '../base/SimBase';
import {FunctionUtils} from '../util/function/FunctionUtils';
import {Intent} from '../intent/Intent';
import {SimGlobal} from '../global/SimGlobal';
import {Navigation} from '../service/Navigation';
import {RootScope, TargetNode} from '../render/compile/RootScope';
import {ModuleOption} from './ModuleOption';
import {ConstructorType} from '../types/Types';
import {ScopeRawSet} from "../render/compile/ScopeRawSet";
import {DomUtils} from "../util/dom/DomUtils";
import {Scope} from "../render/compile/Scope";

export type RefModuleItem = {dest?: any, params: any[], callBack: Function };

export class Module extends SimBase implements LifeCycle {
    public router_outlet_id?: string;
    public id: string;
    public _refModule = new Map<string, Map<Module, RefModuleItem[]> >();
    public _scopes = new Map<string, RootScope>();
    public _option: ModuleOption
    public value: any;
    private _renderer: Renderer;
    private _navigation: Navigation;

    constructor(option: { template?: string, styleImports?: string[], modules?: { [name: string]: ConstructorType<Module> }, value?: any, name?: string } = {}) {
        super();
        this._renderer = SimGlobal.application?.simstanceManager.getOrNewSim(Renderer)!
        this._navigation = SimGlobal.application?.simstanceManager.getOrNewSim(Navigation)!
        // default option
        this.value = option.value;
        this._option = Object.assign(new ModuleOption(), option)
        this._option.template = this._option.template
        this.id = `___Module__${this.constructor.name}_${RandomUtils.uuid()}`
        this.init();
    }

    private init() {
        if (this._option.template.search('\\[router-outlet\\]')) {
            this.router_outlet_id = `___Module___router-outlet_${this.id}_${RandomUtils.uuid()}`
            this._option.template = this._option.template.replace('[router-outlet]', ` id='${this.router_outlet_id}' `)
        }
    }

    public getValue<T = any>(name: string, value?: any): T {
        const thisAny = this as any;
        let r = thisAny[name];
        if (typeof r === 'function') {
            r = r.bind(this);
        }
        return r;
    }

    public setValue(name: string, value?: any) {
        const thisAny = this as any;
        const thisAnyElement = thisAny[name];
        if (typeof thisAnyElement === 'number') {
            thisAny[name] = Number(value);
        } else {
            thisAny[name] = value.toString();
        }
    }

    private setEvent(endFix: string, rootElement: DocumentFragment) {
        const attr = 'module-event-' + endFix
        this.procAttr<HTMLInputElement>(rootElement, attr, (it, attribute) => {
            if (attribute && this.getValue(attribute)) {
                fromEvent<Event>(it, endFix).subscribe(eit => {
                    const view = new View(eit.target! as Element)
                    if (typeof this.getValue(attribute) === 'function') {
                        this.getValue(attribute)(eit, view)
                    } else {
                        this.setValue(attribute, it.value)
                    }
                })
            }
        })
    }

    private setIntentEvent(endFix: string, rootElement: DocumentFragment) {
        if (!rootElement) return
        const attr = 'module-event-' + endFix + '-intent-publish'
        this.procAttr(rootElement, attr, (it, attr) => {
            const attribute = FunctionUtils.eval(attr)
            if (attribute && Array.isArray(attribute)) {
                fromEvent<Event>(it, endFix).subscribe(eit => {
                    // eit.target
                    if (attribute.length === 2) {
                        let newVarElement = this.getValue(attribute[1]);
                        if (typeof newVarElement === 'function') {
                            newVarElement = newVarElement();
                        }
                        this.publish(new Intent<any>(attribute[0], newVarElement, eit));
                    } else if (attribute.length === 1) {
                        this.publish(new Intent<any>(attribute[0], new View(eit.target! as Element, this), eit));
                    }
                })
            }
        })
    }

    // public findChildAttributeElements<E extends Element>(attr: string, rootElement = document.querySelector(this.selector)) {
    //     if (!rootElement) return
    //     return rootElement.querySelectorAll<E>(`[${attr}]`)
    // }

    private _onInit() {
        this.onInit()
    }

    private _onChangedRender() {
        this.onChangedRender()
    }

    private _onInitedChild() {
        this.onInitedChild()
    }

    private _onFinish() {
        this.onFinish()
    }

    public addEvent(rootElement: DocumentFragment) {
        if (!rootElement) return
        ['click', 'change', 'keyup', 'keydown', 'input'].forEach(it => {
            this.setEvent(it, rootElement);
            this.setIntentEvent(it, rootElement);
        });

        // value
        this.procAttr<HTMLInputElement>(rootElement, 'module-value', (it, attribute) => {
            if (attribute && this.getValue(attribute)) {
                if (typeof this.getValue(attribute) === 'function') {
                    it.value = this.getValue(attribute)()
                } else {
                    it.value = this.getValue(attribute)
                }
            }
        })

        // link
        this.procAttr<HTMLInputElement>(rootElement, 'module-value-link', (it, varName) => {
            if (varName && this.getValue(varName)) {
                fromEvent<Event>(it, 'input').subscribe(eit => {
                    if (typeof this.getValue(varName) === 'function') {
                        this.getValue(varName)(eit)
                    } else {
                        this.setValue(varName, it.value)
                    }
                })

                if (typeof this.getValue(varName) === 'function') {
                    it.value = this.getValue(varName);
                } else {
                    it.value = this.getValue(varName);
                }
                this.pushAndCallBackRefModule(varName, {
                    dest: it, params: [it, varName], callBack: (it: HTMLElement, varName: string) => {
                        (it as any).value = this.getValue(varName);
                    }
                });
            }
        })


        // attribute
        this.procAttr(rootElement, 'module-change-attr', (it, attribute) => {
            const varNames = new Set(Scope.usingThisVar(attribute ?? ''));
            const script = attribute;
            varNames.forEach(varName => {
                this.pushAndCallBackRefModule(varName, {
                    dest: it,
                    params: [it, varName, script],
                    callBack: (it: HTMLElement, varName: string, script: string) => {
                        const rtnAttribute = FunctionUtils.eval<Object>(`const attribute = ${JSON.stringify(DomUtils.getAttributeToObject(it))};` + script, this) ?? {};
                        for (const [key, value] of Object.entries(rtnAttribute)) {
                            it.setAttribute(key, value);
                        }
                    }
                });
            })
        })

        // style
        this.procAttr(rootElement, 'module-change-style', (it, attribute) => {
            const varNames = new Set(Scope.usingThisVar(attribute ?? ''));
            const script = attribute;
            varNames.forEach(varName => {
                this.pushAndCallBackRefModule(varName, {
                    dest: it,
                    params: [it, varName, script],
                    callBack: (it: HTMLElement, varName: string, script: string) => {
                        const rtnStyle = FunctionUtils.eval<string>(`const style=${JSON.stringify(DomUtils.getStyleToObject(it))};` + script, this) ?? {};
                        for (const [key, value] of Object.entries(rtnStyle)) {
                            (it.style as any)[key] = value;
                        }
                    }
                });
            })
        })

        // router-link
        this.procAttr(rootElement, 'router-link', (it, attribute) => {
            fromEvent<Event>(it, 'click').subscribe(eit => {
                this._navigation?.go(attribute || '');
            })
        })
    }

    public pushRefModule(varName: string, refModuleItem: RefModuleItem, module: Module = this) {
        if (!this._refModule.get(varName)) {
            this._refModule.set(varName, new Map([[this, []]]));
        }
        this._refModule.get(varName)?.get(module)?.push(refModuleItem);
    }

    public pushAndCallBackRefModule(varName: string, refModuleItem: RefModuleItem, module: Module = this) {
        this.pushRefModule(varName, refModuleItem, module);
        refModuleItem.callBack.apply(module, refModuleItem.params);
    }

    public onInit() {
    }

    public onChangedRender() {
    }

    public onInitedChild() {
    }

    public onFinish() {
    }

    public refModuleClean(){
        this._refModule.forEach((it, itk) => {
            it.forEach((sit, sitk) => {
                const filter = sit.filter(sitem => sitem.dest === undefined || sitem.dest.isConnected === true)
                if (filter?.length > 0) {
                    it.set(sitk, filter);
                } else {
                    it.delete(sitk);
                }
                if (it.size <= 0) {
                    this._refModule.delete(itk);
                }
            });
        })
    }

    public setScope(targetNode: TargetNode, uuid = RandomUtils.uuid()) {
        const rawSet = new ScopeRawSet(this.templateString, this._option.styleImports);
        const scope = this._renderer?.compileScope(rawSet, this, uuid);
        if (scope) {
            scope.targetNode = targetNode;
            this._scopes.set(scope.uuid, scope);
        }
        return scope;
    }

    public renderToScope(varName: string) {
        // console.log('--->', varName, this._scopes)
        this._scopes.forEach(it => this._renderer?.renderToScope(it, this, varName));
        // this.findModuleField().forEach(it => it.renderToScope(varName));
    }

    public renderWrap() {
        // using variable ref adding~
        const usingVarSet = new Set<string>();
        Array.from(this._scopes.values()).map(it => it.usingVars).forEach(it => it.forEach(sit => usingVarSet.add(sit)));
        usingVarSet.forEach(it => {
            const s = it.split('.')
            for (let i = 1; i <= s.length; i++) {
                const tail = s.slice(s.length - i, s.length - i + 1)
                const front = s.slice(0, s.length - i)
                const frontEnd = this.getValue(front[front.length - 1]);
                const tailEnd = tail[tail.length - 1];
                if (frontEnd instanceof Module && tailEnd) {
                    if (!frontEnd._refModule.get(tailEnd)) {
                        frontEnd._refModule.set(tailEnd, new Map([[this, []]]));
                    }
                    frontEnd._refModule.get(tailEnd)?.get(this)?.push({params: [it], callBack: this.renderToScope});
                }
            }
        })

        this._scopes.forEach(it => this._renderer?.renderToByScopes(it, this));
        this._onChangedRender();
    }

    public scopeUpdateAndRenderToByScopes() {
        this._scopes.forEach((it, key, map) => {
            if (it.targetNode.node || it.childIsContain()) {
                this._renderer?.renderToByScopes(it, this);
            } else {
                map.delete(key);
            }
        });
    }

    procAttr<T extends HTMLElement>(element: DocumentFragment, attrName: string, f: (h: T, value: string | null) => void) {
        element.querySelectorAll<T>(`[${attrName}]`).forEach(it => {
            f(it, it.getAttribute(attrName));
        });
    }

    public getTemplateSelector(scope_uuid: string): string {
        return `#${this.id}[module-scope='${scope_uuid}']`;
    }


    public getTemplateElementString(scope_uuid: string): string {
        return `<template id="${this.id}" module-scope="${scope_uuid}"></template>`
    }

    public get templateString(): string {
        return this._option.template ?? '';
    }
}
