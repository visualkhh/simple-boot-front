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

export class Module extends SimBase implements LifeCycle {
    public router_outlet_selector: string | undefined;
    private router_outlet_id: string | undefined;
    public styleImports: string[] | undefined;

    // @Injection(Renderer)
    // public renderer: any;

    // @Injection(Renderer)
    // private visual = undefined;
    // private renderer: Renderer|undefined;
    public id: string;

    constructor(public selector = '', public template = '{%write(this.value)%}', public wrapElement = 'div',
                private _renderer = SimGlobal.application?.simstanceManager.getOrNewSim(Renderer),
                private _navigation = SimGlobal.application?.simstanceManager.getOrNewSim(Navigation)
    ) {
        super();
        this.id = `___Module___${this.selector}_${RandomUtils.uuid()}`
        this.selector = `#${this.id}`
    }

    // @PostConstruct()
    // postConstruct(renderer: Renderer) {
    //     this.renderer = renderer;
    //     console.log('module renderer ', renderer)
    // }

    public renderString(): string {
        return this._renderer?.renderString(this.template, this) || '';
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
        thisAny[name] = value;
    }

    private setEvent(endFix: string, rootElement = document.querySelector(this.selector)) {
        if (!rootElement) return
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

    private setIntentEvent(endFix: string, rootElement = document.querySelector(this.selector)) {
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
        if (this.template.search('\\[router-outlet\\]')) {
            this.router_outlet_id = `___Module___router-outlet_${this.id}_${RandomUtils.uuid()}`
            this.router_outlet_selector = `#${this.router_outlet_id}`
            this.template = this.template.replace('[router-outlet]', ` id='${this.router_outlet_id}' `)
        }
        this.onInit()
    }

    private _onChangedRender() {
        const rootElement = document.querySelector(this.selector)
        this.addEvent(rootElement)
        this.addBind(rootElement)
        this.addRout(rootElement)
        this.onChangedRender()
    }

    private _onInitedChild() {
        this.onInitedChild()
    }

    private _onFinish() {
        this.onFinish()
    }

    private addEvent(rootElement: Element | null) {
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
            }
        })

        // router-link
        this.procAttr(rootElement, 'router-link', (it, attribute) => {
            fromEvent<Event>(it, 'click').subscribe(eit => {
                this._navigation?.go(attribute || '');
                // if (typeof this.getValue(attribute) === 'function') {
                //     this.getValue(attribute)(eit)
                // } else {
                //     this.setValue(attribute, it.value)
                // }
            })
        })
        // rootElement.querySelectorAll<HTMLInputElement>(`[${attr}]`).forEach(it => {
        //     const attribute = it.getAttribute(attr)
        //     const newVar = this as any
        //     if (attribute && newVar[attribute]) {
        //         ['change'].forEach(eit => {
        //             fromEvent<Event>(it, eit).subscribe(eit => {
        //                 if (typeof newVar[attribute] === 'function') {
        //                     newVar[attribute](eit)
        //                 } else {
        //                     newVar[attribute] = it.value
        //                 }
        //             })
        //         })
        //     }
        // })
    }

    private addBind(rootElement: Element | null) {
        // if (!rootElement) return
        // const attr = 'module-bind'
        // rootElement.querySelectorAll<HTMLInputElement>(`[${attr}]`).forEach(it => {
        //     const attribute = it.getAttribute(attr)
        //     const newVar = this as any
        //     if (attribute && newVar[attribute] instanceof Module) {
        //         console.log('-->', it)
        //     }
        // })
    }

    private addRout(rootElement: Element | null) {
        // if (!rootElement) return
        // const attr = 'router-active-class';
        // rootElement.querySelectorAll<HTMLInputElement>(`[${attr}]`).forEach(it => {
        //     const hrefAttr = (it.getAttribute('href') ?? '').replace('#', '')
        //     const actives = FunctionUtils.eval<string[]>(it.getAttribute(attr) ?? '[]')
        //     if (hrefAttr === LocationUtils.hash()) {
        //         it.classList.add(...actives)
        //         DomUtils.setAttribute(it, actives);
        //     } else {
        //         it.classList.remove(...actives)
        //         DomUtils.removeAttribute(it, actives);
        //     }
        // })
    }

    public onInit() {
    }

    public onChangedRender() {
    }

    public onInitedChild() {
    }

    public onFinish() {
    }

    public render(selector = this.selector) {
        this._renderer?.renderTo(selector, this)
        this.renderd(this.selector)
    }

    public renderWrap(selector = this.selector) {
        this._renderer?.renderTo(selector, this.renderWrapString())
        this._onChangedRender()
        this.renderd(this.selector)
    }

    public renderd(selector: string) {
        this.transStyle(selector);
    }

    public transStyle(selector: string): void {
        const join = this.styleImports?.map(it => {
            // eslint-disable-next-line prefer-regex-literals
            const regExp = new RegExp('\\/\\*\\[module\\-selector\\]\\*\\/', 'gi') // 생성자
            return it.replace(regExp, selector + ' ')
        }).join(' ')
        this._renderer?.prependStyle(selector, join)
    }

    procAttr<T extends HTMLElement>(element: Element | null, attrName: string, f: (h: T, value: string | null) => void) {
        element?.querySelectorAll<T>(`[${attrName}]`).forEach(it => {
            f(it, it.getAttribute(attrName));
        });
    }

    public renderWrapString(): string {
        return `<${this.wrapElement} id="${this.id}">${this._renderer?.renderString(this.template, this) || ''}</${this.wrapElement}>`
    }

    public exist(): boolean {
        return this._renderer?.exist(this.selector) || false
    }

    public toString(): string {
        return this.renderWrapString()
    }
}
