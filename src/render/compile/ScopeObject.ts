import {RandomUtils} from '../../util/random/RandomUtils';
import {ScopeResultSet} from './ScopeResultSet';

export class ScopeObject {
    [name: string]: any;

    public writes = '';
    public uuid = RandomUtils.uuid();

    public executeResultSet(code: string): ScopeResultSet {
        this.eval(code);
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.writes;
        const startComment = document.createComment('scope start ' + this.uuid)
        const endComment = document.createComment('scope end ' + this.uuid)
        // templateElement.innerHTML = '<!--scope start ' + this.uuid + '-->' + this.writes + '<!--scope end ' + this.uuid + '-->'
        return new ScopeResultSet(this, templateElement.content, startComment, endComment)
        // return new ScopeResultSet(this, templateElement.content, code, returnValue)
    }

    private eval(str: string): any {
        return this.scopeEval(this, str);
    }

    private scopeEval(scope: any, script: string) {
        // eslint-disable-next-line no-new-func
        return Function(`"use strict";
        const write = (str) => {
            this.writes += str;
        }
        ${script}
        `).bind(scope)();
    }
}
