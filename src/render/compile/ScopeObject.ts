import {RandomUtils} from '../../util/random/RandomUtils';
import {ScopeResultSet} from './ScopeResultSet';
import {Module} from '../../module/Module';
import {TargetNode, TargetNodeMode} from './RootScope';

export class ScopeObject {
    [name: string]: any;

    public writes = '';

    constructor(public uuid = RandomUtils.uuid()) {
    }

    public executeResultSet(code: string): ScopeResultSet {
        this.eval(code);
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.writes;
        const startComment = document.createComment('scope start ' + this.uuid)
        const endComment = document.createComment('scope end ' + this.uuid)
        // templateElement.innerHTML = '<!--scope start ' + this.uuid + '-->' + this.writes + '<!--scope end ' + this.uuid + '-->'
        return new ScopeResultSet(this.uuid, this, templateElement.content, startComment, endComment)
        // return new ScopeResultSet(this, templateElement.content, code, returnValue)
    }

    private eval(str: string): any {
        return this.scopeEval(this, str);
    }

    private scopeEval(scope: any, script: string) {
        // eslint-disable-next-line no-new-func
        return Function(`"use strict";
        const write = (str) => {
            this.appendWrite(str);
        }
        const module = (module) => {
            this.moduleWriteAndSetScope(module, false);
        }
        const stripModule = (module) => {
            this.moduleWriteAndSetScope(module, true);
        }
        ${script}
        `).bind(scope)();
    }

    public appendWrite(str: string) {
        console.log('appendWrite--->', str)
        this.writes += str;
    }

    public moduleWriteAndSetScope(module: Module, strip: boolean) {
        if (module) {
            const uuid = RandomUtils.uuid();
            // console.log('moduleWriteAndSetScope', uuid, module);
            const targetSelecotr = module.getTemplateWrapScopeSelector(uuid)
            // const targetNode = new TargetNode(targetSelecotr, strip === true ? TargetNodeMode.replace : TargetNodeMode.child);
            const targetNode = new TargetNode(targetSelecotr, TargetNodeMode.replace);
            const scope = module.setScope(targetNode, strip === true, uuid);
            if (scope) {
                this.appendWrite(module.getWrapScopeString(scope.uuid) ?? '');
            }
        }
    }
}
