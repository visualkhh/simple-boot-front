import {Module} from '../module/Module'
import Handlebars from 'handlebars'

export const Renderer = new class {
    public selector = 'app';

    public renderString(template: string, obj: any): string {
        return Handlebars.compile(template)(obj);
    }

    public render(module: Module | string) {
        const targetElement = document.querySelector(`#${this.selector}`)
        if (targetElement && module instanceof Module) {
            targetElement.innerHTML = module.renderString();
            (module as any)._onChangedRender();
        } else if (targetElement && typeof module === 'string') {
            // console.log('Renderer-->render', module, targetElement)
            targetElement.innerHTML = module
        }
    }

    public renderInnerHTML(element: Element, template: string, data: any) {
        element.innerHTML = this.renderString(template, data);
    }

    public renderTo(selector: string, module: Module | string) {
        const targetElement = document.querySelector(`#${selector}`)
        if (targetElement && module instanceof Module) {
            targetElement.innerHTML = module.renderString();
            (module as any)._onChangedRender();
        } else if (targetElement && typeof module === 'string') {
            // console.log('Renderer-to->render', module, targetElement)
            targetElement.innerHTML = module;
        }
    }

    public prependStyle(selector: string, style: string | undefined) {
        const targetElement = document.querySelector(`#${selector}`)
        if (targetElement && style) {
            const htmlStyleElement = document.createElement('style')
            htmlStyleElement.innerHTML = style;
            targetElement.prepend(htmlStyleElement)
        }
    }

    public exist(selector: string): boolean {
        if (document.querySelector(`#${selector}`)) {
            return true;
        } else {
            return false;
        }
    }
}()
