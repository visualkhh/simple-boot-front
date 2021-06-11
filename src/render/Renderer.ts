import {Module} from '../module/Module'
import {SimOption} from '../option/SimOption';
import {Sim} from '../decorators/SimDecorator';
import {SimCompiler} from './compile/SimCompiler';
import {Scope} from './compile/Scope';
import {RandomUtils} from '../util/random/RandomUtils';
import {NodeUtils} from '../util/node/NodeUtils';
import {RootScope, TargetNodeMode} from './compile/RootScope';

@Sim()
export class Renderer {
    constructor(private option: SimOption) {
    }

    public compileScope(template: string, obj: any, rootUUID = RandomUtils.uuid()): RootScope | undefined {
        const compiler = new SimCompiler(template, obj, rootUUID)
        return compiler.run().root;
    }

    public render(module: Module | string) {
        const targetElement = document.querySelector(this.option.selector)
        if (targetElement && module instanceof Module) {
            targetElement.innerHTML = module.templateString;
            (module as any)._onChangedRender();
        } else if (targetElement && typeof module === 'string') {
            targetElement.innerHTML = module
        }
    }

    public renderToScope(scope: Scope, module: Module, varName: string): boolean {
        const targets = scope.childs.filter(it => it.usingVars.includes(varName));
        targets.forEach(it => {
            if (it.scopeResult) {
                it.scopeResult.childNodes.forEach(it => it.remove());
                const startComment = it.scopeResult.startComment;
                const endComment = it.scopeResult.endComment;
                it.exec(module)
                it.scopeResult.childNodes.forEach(cit => NodeUtils.addNode(startComment, cit));
                NodeUtils.replaceNode(startComment, it.scopeResult.startComment);
                NodeUtils.replaceNode(endComment, it.scopeResult.endComment);
            }
        })
        return false;
    }

    public renderToByScopes(scope: RootScope) {
        if (TargetNodeMode.child === scope.targetNode.mode) {
            NodeUtils.removeAllChildNode(scope.targetNode.node)
            NodeUtils.appendChild(scope.targetNode.node, scope.executeFragment())
        } else if (TargetNodeMode.replace === scope.targetNode.mode) {
            NodeUtils.replaceNode(scope.targetNode.node, scope.executeFragment())
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
