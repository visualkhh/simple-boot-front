export class ScopeObject {
    [name: string]: any;

    public writes = '';

    eval(str: string): any {
        return this.scopeEval(this, str);
    }

    scopeEval(scope: any, script: string) {
        // eslint-disable-next-line no-new-func
        return Function(`"use strict";
        const write = (str) => {
            this.writes += str;
        }
        ${script}
        `).bind(scope)();
    }
}
