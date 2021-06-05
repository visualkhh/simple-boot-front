import {Module} from '../module/Module'
import {SimOption} from '../option/SimOption';
import {Sim} from '../decorators/SimDecorator';
import {SimCompiler} from './compile/SimCompiler';
import {Scope} from './compile/Scope';

@Sim()
export class Renderer {
    constructor(private option: SimOption) {
    }

    public compileScope(template: string, obj: any, compiler = new SimCompiler(template, obj)): Scope | undefined {
        return compiler.run().root;
    }

    public renderString(template: string, obj: any, compiler = new SimCompiler(template, obj)): string {
        const root = compiler.run().root;
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

    // public renderInnerHTML(element: Element, template: string, data: any) {
    //     element.innerHTML = this.renderString(template, data);
    // }

    public renderToScope(scope: Scope, module: Module, varName: string): boolean {
        const targets = scope.childs.filter(it => it.usingVars.includes(varName));
        targets.forEach(it => {
            if (it.scopeResult) {
                it.scopeResult.childNodes.forEach(it => it.remove());
                const startComment = it.scopeResult.startComment;
                const endComment = it.scopeResult.endComment;
                it.exec(module)
                it.scopeResult.childNodes.forEach(cit => startComment.parentNode?.insertBefore(cit, startComment.nextSibling));
                startComment.parentNode?.replaceChild(it.scopeResult.startComment, startComment);
                endComment.parentNode?.replaceChild(it.scopeResult.endComment, endComment);
            }
        })
        console.log('renderToScope-->', targets)
        // scope.executeFragment();//.scopeObjects.filter(it => it.)
        return false;
    }

    public renderToByScope(scope: Scope, selector: string, module: Module | string = this.option.selector) {
        const targetElement = document.querySelector(selector)
        if (targetElement && module instanceof Module) {
            targetElement.innerHTML = '';
            targetElement.appendChild(scope.executeFragment().fragment);
            (module as any)._onChangedRender();
        } else if (targetElement && typeof module === 'string') {
            targetElement.innerHTML = '';
            targetElement.appendChild(scope.executeFragment().fragment);
        }
    }

    /**
     * @deprecated
     */
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
