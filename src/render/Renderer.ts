import {Module} from '../module/Module'
import {SimOption} from '../option/SimOption';
import {Sim} from '../decorators/SimDecorator';
import {SimCompiler} from './compile/SimCompiler';
import {Scope} from './compile/Scope';
import {DomUtils} from "../util/dom/DomUtils";

@Sim()
export class Renderer {
    constructor(private option: SimOption) {
    }

    public compileScope(template: string, obj: any, compiler = new SimCompiler(template, obj)): Scope | undefined {
        return compiler.run().root;
    }

    public render(module: Module | string) {
        const targetElement = document.querySelector(this.option.selector)
        if (targetElement && module instanceof Module) {
            targetElement.innerHTML = module.templateString;
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
            // console.log('target scope--->', it.uuid)
            // if (!it.scopeResult) {
            //     it.exec()
            // }
            if (it.scopeResult) {
                it.scopeResult.childNodes.forEach(it => it.remove());
                const startComment = it.scopeResult.startComment;
                const endComment = it.scopeResult.endComment;
                // console.log('startComment->', startComment, it.uuid)
                it.exec(module)
                it.scopeResult.childNodes.forEach(cit => startComment.parentNode?.insertBefore(cit, startComment.nextSibling));
                startComment.parentNode?.replaceChild(it.scopeResult.startComment, startComment);
                endComment.parentNode?.replaceChild(it.scopeResult.endComment, endComment);
            }
        })
        // console.log('renderToScope-->', targets)
        // scope.executeFragment();//.scopeObjects.filter(it => it.)
        return false;
    }

    // /** @deprecated */
    public renderToByScope(scope: Scope, selector: string, module: Module | string = this.option.selector) {
        const targetElements = DomUtils.selectorElements(selector);
        if (targetElements.length > 0 && module instanceof Module) {
            targetElements.forEach(it => {
                it.innerHTML = '';
                it.appendChild(scope.executeFragment().fragment);
            });
            (module as any)._onChangedRender();
        } else if (targetElements.length > 0 && typeof module === 'string') {
            targetElements.forEach(it => {
                it.innerHTML = '';
                it.appendChild(scope.executeFragment().fragment);
            });
        }
    }

    /**
     * @deprecated
     */
    public renderTo(selector: string, module: Module | string = this.option.selector) {
        const targetElements = DomUtils.selectorElements(selector);
        if (targetElements.length > 0 && module instanceof Module) {
            targetElements.forEach(it => {
                it.innerHTML = module.templateString;
            });
            (module as any)._onChangedRender();
        } else if (targetElements.length > 0 && typeof module === 'string') {
            targetElements.forEach(it => {
                it.innerHTML = module;
            });
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
}
