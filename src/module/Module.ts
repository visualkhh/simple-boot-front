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

export class Module extends SimBase implements LifeCycle {
    public router_outlet_selector?: string;
    private router_outlet_id?: string;
    public id: string;
    public _refModule = new Map<string, Map<Module, string[]>>();
    public _scopes = new Map<string, RootScope>();
    public _option: ModuleOption
    public value: any;

    constructor(public selector = '', option: { template?: string, styleImports?: string[], wrapElement?: string, modules?: { [name: string]: ConstructorType<Module> }, value?: any } = {},
                private _renderer = SimGlobal.application?.simstanceManager.getOrNewSim(Renderer),
                private _navigation = SimGlobal.application?.simstanceManager.getOrNewSim(Navigation)
    ) {
        super();
        // default option
        this.value = option.value;
        this._option = Object.assign(new ModuleOption(), option)
        this._option.template = this._option.template
        this.id = `___Module___${this.selector}_${RandomUtils.uuid()}`
        this.selector = `#${this.id}`
        this.init();
    }

    private init() {
        if (this._option.template.search('\\[router-outlet\\]')) {
            this.router_outlet_id = `___Module___router-outlet_${this.id}_${RandomUtils.uuid()}`
            this.router_outlet_selector = `#${this.router_outlet_id}`
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

    public findChildAttributeElements<E extends Element>(attr: string, rootElement = document.querySelector(this.selector)) {
        if (!rootElement) return
        return rootElement.querySelectorAll<E>(`[${attr}]`)
    }

    private createChildId(): string {
        return `${this.selector}_child_${RandomUtils.uuid()}`
    }

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
        ['click', 'change', 'keyup', 'keydown'].forEach(it => {
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
        this.procAttr<HTMLInputElement>(rootElement, 'module-link', (it, attribute) => {
            if (attribute && this.getValue(attribute)) {
                ['change'].forEach(eit => {
                    fromEvent<Event>(it, eit).subscribe(eit => {
                        if (typeof this.getValue(attribute) === 'function') {
                            this.getValue(attribute)(eit)
                        } else {
                            this.setValue(attribute, it.value)
                        }
                    })
                })

                if (typeof this.getValue(attribute) === 'function') {
                    it.value = this.getValue(attribute);
                } else {
                    it.value = this.getValue(attribute);
                }
            }
        })

        // router-link
        this.procAttr(rootElement, 'router-link', (it, attribute) => {
            fromEvent<Event>(it, 'click').subscribe(eit => {
                this._navigation?.go(attribute || '');
            })
        })
    }

    // private addBind(rootElement: Element | null) {
    // }
    //
    // private addRout(rootElement: Element | null) {
    // }

    public onInit() {
    }

    public onChangedRender() {
    }

    public onInitedChild() {
    }

    public onFinish() {
    }

    public setScope(targetNode: TargetNode, strip = false, uuid = RandomUtils.uuid()) {
        const rawSet = new ScopeRawSet(strip ? this.templateString : this.getTemplateWrapScopeString(uuid), this._option.styleImports);
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
                    frontEnd._refModule.get(tailEnd)?.get(this)?.push(it);
                }
            }
        })

        this._scopes.forEach(it => this._renderer?.renderToByScopes(it, this));
        this._onChangedRender();
        this.renderd(this.selector);
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

    public renderd(selector: string) {
    }

    procAttr<T extends HTMLElement>(element: DocumentFragment, attrName: string, f: (h: T, value: string | null) => void) {
        element.querySelectorAll<T>(`[${attrName}]`).forEach(it => {
            f(it, it.getAttribute(attrName));
        });
    }

    public get templateWrapString(): string {
        return `<${this._option.wrapElement} id="${this.id}">${this._option.template || ''}</${this._option.wrapElement}>`
    }

    public getTemplateWrapScopeSelector(scope_uuid: string): string {
        return this.selector + `[scope='${scope_uuid}']`;
    }

    public getWrapScopeString(scope_uuid: string): string {
        return `<${this._option.wrapElement} id="${this.id}" scope="${scope_uuid}"></${this._option.wrapElement}>`
    }

    public getTemplateWrapScopeString(scope_uuid: string): string {
        return `<${this._option.wrapElement} id="${this.id}" scope="${scope_uuid}">${this._option.template || ''}</${this._option.wrapElement}>`
    }

    public get templateString(): string {
        return this._option.template || '';
    }
}
