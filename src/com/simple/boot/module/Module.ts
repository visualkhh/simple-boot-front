import Handlebars from 'handlebars'
import {Renderer} from '../render/Renderer'
import {LifeCycle} from '../module/LifeCycle'
import {fromEvent} from 'rxjs';
import {View} from '../service/view/View'
import {RandomUtils} from '../util/random/RandomUtils'

export class Module implements LifeCycle {
    public router_outlet_selector: string | undefined
    public styleImports: string[] | undefined

    constructor(public selector = '', public template = '{{data}}', public wrapElement = 'div') {
        this.selector = `___Module___${this.selector}_${RandomUtils.uuid()}`
        if (this.template.search('\\[router-outlet\\]')) {
            this.router_outlet_selector = `___Module___router-outlet_${this.selector}_${RandomUtils.uuid()}`
            this.template = this.template.replace('[router-outlet]', ` id='${this.router_outlet_selector}' `)
        }
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
            // eslint-disable-next-line no-prototype-builtins
            if (attribute && this.hasOwnProperty(attribute)) {
                fromEvent<MouseEvent>(it, endFix).subscribe(eit => {
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

    //, rootElement = document.querySelector(`#${this.selector}`)
    public findChildAttributeElements<E extends Element>(attr: string, rootElement = document.querySelector(`#${this.selector}`)) {
        // const targetSelector = `#${this.selector} [${attr}]`
        if (!rootElement) return
        return rootElement.querySelectorAll<E>(`[${attr}]`)
    }

    private createChildId(): string {
        return `${this.selector}_child_${RandomUtils.uuid()}`
    }

    private _onInit() {
        // Renderer.renderTo(this.selector, '')
        this.onInit()
    }

    private _onChangedRendered() {
        this.addEvent()
        this.onChangedRendered()
    }

    private _onInitedChiled() {
        this.onInitedChiled()
    }

    private _onFinish() {
        this.onFinish()
    }

    private addEvent(rootElement = document.querySelector(`#${this.selector}`)) {
        if (!rootElement) return

        ['click', 'change', 'keyup', 'keydown'].forEach(it => this.setEvent(it, rootElement))
        // value
        let attr = 'module-value'
        rootElement.querySelectorAll<HTMLInputElement>(`[${attr}]`).forEach(it => {
            const attribute = it.getAttribute(attr)
            // eslint-disable-next-line no-prototype-builtins
            if (attribute && this.hasOwnProperty(attribute)) {
                const newVar = this as any
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
            // eslint-disable-next-line no-prototype-builtins
            if (attribute && this.hasOwnProperty(attribute)) {
                const newVar = this as any
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

    public onInit() {
    }

    public onChangedRendered() {
    }

    public onInitedChiled() {
    }

    public onFinish() {
    }

    public render(selector = this.selector || Renderer.selector) {
        Renderer.renderTo(selector, this)
        this.transStyle(this.selector)
    }

    public renderWrap(selector = this.selector || Renderer.selector) {
        Renderer.renderTo(selector, this.renderWrapString())
        this._onChangedRendered()
        this.transStyle(this.selector)
    }

    public transStyle(selector: string): void {
        const join = this.styleImports?.map(it => {
            // eslint-disable-next-line prefer-regex-literals
            const regExp = new RegExp('\\/\\*\\[module\\-selector\\]\\*\\/', 'gi') // 생성자
            return it.replace(regExp, '#' + selector + ' ')
        }).join(' ')
        Renderer.prependStyle(selector, join)
    }

    public renderWrapString(): string {
        return `<${this.wrapElement} id="${this.selector}">${Handlebars.compile(this.template)(this)}</${this.wrapElement}>`
    }

    public exist(): boolean {
        return Renderer.exist(this.selector)
    }

    public toString(): string {
        return this.renderWrapString()
    }
}
