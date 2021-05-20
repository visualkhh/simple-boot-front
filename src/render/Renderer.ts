import {Module} from '../module/Module'
import {SimOption} from '../option/SimOption';
import {Sim} from '../decorators/SimDecorator';
import {SimCompiler} from './compile/SimCompiler';

@Sim()
export class Renderer {
    constructor(private option: SimOption) {
        // console.log('renderer --> ', option)
    }

    public renderString(template: string, obj: any): string {
        const root = new SimCompiler(template, obj).run().root;
        return root?.execResult() || '';
    }

    public render(module: Module | string) {
        const targetElement = document.querySelector(this.option.selector)
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

    public renderTo(selector: string, module: Module | string = this.option.selector) {
        const targetElement = document.querySelector(selector)
        if (targetElement && module instanceof Module) {
            targetElement.innerHTML = module.renderString();
            (module as any)._onChangedRender();
        } else if (targetElement && typeof module === 'string') {
            // console.log('Renderer-to->render', module, targetElement)
            targetElement.innerHTML = module;
        }
    }

    public prependStyle(selector: string, style: string | undefined) {
        const targetElement = document.querySelector(selector)
        if (targetElement && style) {
            const htmlStyleElement = document.createElement('style')
            htmlStyleElement.innerHTML = style;
            targetElement.prepend(htmlStyleElement)
        }
    }

    public exist(selector: string): boolean {
        if (document.querySelector(selector)) {
            return true;
        } else {
            return false;
        }
    }

    // engine
}
