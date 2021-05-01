import 'rxjs/Observable'
import Handlebars from 'handlebars'
import {Renderer} from '../render/Renderer'
import {LifeCycle} from '../module/LifeCycle'
import {fromEvent} from 'rxjs';
import {View} from '../service/view/View'
import {RandomUtils} from '../util/random/RandomUtils'
import {SimBase} from './SimBase';
import {FunctionUtils} from '../util/function/FunctionUtils';
import {Intent} from '../intent/Intent';
import {SimpleApplication} from '../SimpleApplication';

export class Module extends SimBase implements LifeCycle {
    public router_outlet_selector: string | undefined
    public styleImports: string[] | undefined

    // @Injection(Renderer)
    // public renderer: any;

    // @Injection(Renderer)
    // private visual = undefined;

    constructor(public selector = '', public template = '{{value}}', public wrapElement = 'div', public renderer = SimpleApplication.simstanceManager.getOrNewSim(Renderer)!) {
        super();
        this.selector = `___Module___${this.selector}_${RandomUtils.uuid()}`
    }

    public renderString(): string {
        return Handlebars.compile(this.template)(this)
    }

    private setEvent(endFix: string, rootElement = document.querySelector(`#${this.selector}`)) {
        if (!rootElement) return
        const attr = 'module-event-' + endFix
        rootElement.querySelectorAll<HTMLInputElement>(`[${attr}]`).forEach(it => {
            const attribute = it.getAttribute(attr)
            const newVar = this as any
            if (attribute && newVar[attribute]) {
                fromEvent<Event>(it, endFix).subscribe(eit => {
                    const view = new View(eit.target! as Element)
                    if (typeof newVar[attribute] === 'function') {
                        newVar[attribute](eit, view)
                    } else {
                        newVar[attribute] = it.value
                    }
                })
            }
        })
    }

    private setIntentEvent(endFix: string, rootElement = document.querySelector(`#${this.selector}`)) {
        if (!rootElement) return
        const attr = 'module-event-' + endFix + '-intent-publish'
        rootElement.querySelectorAll<HTMLInputElement>(`[${attr}]`).forEach(it => {
            const attribute = FunctionUtils.eval(it.getAttribute(attr))
            const newVar = this as any
            if (attribute && Array.isArray(attribute)) {
                fromEvent<Event>(it, endFix).subscribe(eit => {
                    // eit.target
                    console.log('--->', eit)
                    if (attribute.length === 2) {
                        let newVarElement = newVar[attribute[1]];
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

    public findChildAttributeElements<E extends Element>(attr: string, rootElement = document.querySelector(`#${this.selector}`)) {
        if (!rootElement) return
        return rootElement.querySelectorAll<E>(`[${attr}]`)
    }

    private createChildId(): string {
        return `${this.selector}_child_${RandomUtils.uuid()}`
    }

    private _onInit() {
        if (this.template.search('\\[router-outlet\\]')) {
            this.router_outlet_selector = `___Module___router-outlet_${this.selector}_${RandomUtils.uuid()}`
            this.template = this.template.replace('[router-outlet]', ` id='${this.router_outlet_selector}' `)
        }
        this.onInit()
    }

    private _onChangedRender() {
        this.addEvent()
        this.addBind()
        this.addRout()
        this.onChangedRender()
    }

    private _onInitedChild() {
        this.onInitedChild()
    }

    private _onFinish() {
        this.onFinish()
    }

    private addEvent(rootElement = document.querySelector(`#${this.selector}`)) {
        if (!rootElement) return

        ['click', 'change', 'keyup', 'keydown'].forEach(it => {
            this.setEvent(it, rootElement);
            this.setIntentEvent(it, rootElement);
        });
        // value
        let attr = 'module-value'
        rootElement.querySelectorAll<HTMLInputElement>(`[${attr}]`).forEach(it => {
            const attribute = it.getAttribute(attr)
            const newVar = this as any
            if (attribute && newVar[attribute]) {
                if (typeof newVar[attribute] === 'function') {
                    it.value = newVar[attribute]
                } else {
                    it.value = newVar[attribute]
                }
            }
        })

        // link
        attr = 'module-link'
        rootElement.querySelectorAll<HTMLInputElement>(`[${attr}]`).forEach(it => {
            const attribute = it.getAttribute(attr)
            const newVar = this as any
            if (attribute && newVar[attribute]) {
                ['change'].forEach(eit => {
                    fromEvent<Event>(it, eit).subscribe(eit => {
                        if (typeof newVar[attribute] === 'function') {
                            newVar[attribute](eit)
                        } else {
                            newVar[attribute] = it.value
                        }
                    })
                })
            }
        })
    }

    private addBind(rootElement = document.querySelector(`#${this.selector}`)) {
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

    private addRout(rootElement = document.querySelector(`#${this.selector}`)) {
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

    public render(selector = this.selector || SimpleApplication.option.selector) {
        this.renderer.renderTo(selector, this)
        this.transStyle(this.selector)
    }

    public renderWrap(selector = this.selector || SimpleApplication.option.selector) {
        this.renderer.renderTo(selector, this.renderWrapString())
        this._onChangedRender()
        this.transStyle(this.selector)
    }

    public transStyle(selector: string): void {
        const join = this.styleImports?.map(it => {
            // eslint-disable-next-line prefer-regex-literals
            const regExp = new RegExp('\\/\\*\\[module\\-selector\\]\\*\\/', 'gi') // 생성자
            return it.replace(regExp, '#' + selector + ' ')
        }).join(' ')
        this.renderer.prependStyle(selector, join)
    }

    public renderWrapString(): string {
        return `<${this.wrapElement} id="${this.selector}">${Handlebars.compile(this.template)(this)}</${this.wrapElement}>`
    }

    public exist(): boolean {
        return this.renderer.exist(this.selector)
    }

    public toString(): string {
        return this.renderWrapString()
    }
}
