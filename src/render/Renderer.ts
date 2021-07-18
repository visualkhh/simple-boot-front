import {FrontModule} from '../module/FrontModule'
import {SimFrontOption} from '../option/SimFrontOption';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {NodeUtils} from '../utils/node/NodeUtils';
import {RootScope, TargetNode, TargetNodeMode} from 'dom-render/RootScope';
import {Scope} from 'dom-render/Scope';
import {DomRender} from 'dom-render/DomRender';
import {Config} from 'dom-render/Config';
import {ScopeFrontObject} from './ScopeFrontObject';
import {ScopeRawSet} from 'dom-render/ScopeRawSet';
import { FrontLifeCycle } from '../module/FrontLifeCycle';

@Sim()
export class Renderer implements FrontLifeCycle {
    constructor(private option: SimFrontOption) {
    }

    onInit(): void {
    }

    onChangedRender(): void {
    }

    onInitedChild(): void {
    }

    onFinish(): void {
    }

    onCreate(): void {
    }

    public compileScope(document: Document, rawSet: ScopeRawSet, obj: any, targetNode: TargetNode, rootUUID = RandomUtils.uuid()): RootScope | undefined {
        const config = new Config(document, (scope) => new ScopeFrontObject(scope.config));
        const domRender = new DomRender(rawSet, config, rootUUID);
        (domRender as any).rootUUID = rootUUID;
        return domRender.compile(obj, targetNode);
    }

    public render(module: FrontModule | string, document: Document) {
        const targetElement = document.querySelector(this.option.selector)
        if (targetElement && module instanceof FrontModule) {
            targetElement.innerHTML = module.templateString;
            (module as any)._onChangedRender();
        } else if (targetElement && typeof module === 'string') {
            targetElement.innerHTML = module
        }
    }

    public renderToScope(scope: Scope, module: FrontModule, varName: string) {
        const targets = scope.childs.filter(it => it.usingVars.includes(varName));
        targets.forEach(it => {
            if (it.scopeResult) {
                it.scopeResult.childAllRemove();
                // clean refEvent
                module.refModuleClean();
                const startComment = it.scopeResult.startComment;
                const endComment = it.scopeResult.endComment;
                it.exec(module)
                module.addEvent(it.scopeResult.fragment);
                it.scopeResult.childNodes.forEach(cit => NodeUtils.addNode(startComment, cit));
                NodeUtils.replaceNode(startComment, it.scopeResult.startComment);
                NodeUtils.replaceNode(endComment, it.scopeResult.endComment);
                it.scopeResult.calls.filter(it => it.name === 'module').map(it => it.result).forEach(it => {
                    (it as FrontModule)?.renderWrap();
                })
            }
            it.usingVars.filter(uit => module.getValue(uit) instanceof FrontModule).forEach(mit => {
                module.getValue(mit).scopeUpdateAndRenderToByScopes();
            })
        })
    }

    public renderToByScopes(scope: RootScope, module: FrontModule) {
        if (scope.targetNode.node) {
            const childNode = scope.executeFragment({childElementAttr: new Map([['module-id', module.id]])}); // {head: h, tail: t} //{head: module.transStyle(scope.uuid)}
            module.addEvent(childNode);
            if (TargetNodeMode.child === scope.targetNode.mode) {
                NodeUtils.removeAllChildNode(scope.targetNode.node)
                // clean refEvent
                // module.refModuleClean();
                NodeUtils.appendChild(scope.targetNode.node, childNode)
            } else if (TargetNodeMode.replace === scope.targetNode.mode) {
                NodeUtils.replaceNode(scope.targetNode.node, childNode)
            } else {
                // nothing..
            }
            scope.childs.forEach(it => {
                it.scopeResult?.calls.filter(it => it.name === 'module').map(it => it.result).forEach(it => {
                    (it as FrontModule)?.renderWrap();
                })
            })
        }
    }

    // public prependStyle(selector: string, style: string | undefined) {
    //     const targetElement = document.querySelector(selector)
    //     if (targetElement && style) {
    //         const htmlStyleElement = document.createElement('style')
    //         htmlStyleElement.innerHTML = style;
    //         targetElement.prepend(htmlStyleElement)
    //     }
    // }
}
