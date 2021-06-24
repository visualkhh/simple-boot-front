import {RandomUtils} from '../../util/random/RandomUtils';
import {ScopeResultSet} from './ScopeResultSet';
import {Module} from '../../module/Module';
import {TargetNode, TargetNodeMode} from './RootScope';
import {SimGlobal} from "../../global/SimGlobal";
import {ModuleOption} from "../../module/ModuleOption";

export type ScopeObjectCalls = {name: string, parameter: any[], result: any}[];
export class ScopeObject {
    declare _dynamicModule: Map<string, Module[]>;
    declare _option: ModuleOption
    public calls: ScopeObjectCalls = [];
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
        templateElement.content.childNodes.forEach(it => {
            if (it.nodeType === Node.ELEMENT_NODE) {
                // (it as Element).setAttribute('scope-parent', parentScope);
                (it as Element).setAttribute('scope-uuid', this.uuid);
            }
        })
        return new ScopeResultSet(this.uuid, this, templateElement.content, startComment, endComment, this.calls)
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
        const moduleIdAttrSelector = () => {
            return write("*[module-id='"+this.id+"']");
        }

        const module = (module) => {
            if (typeof module === 'string') {
                module = this.newSimOrAddDynamicModule(module);
            }
            this.moduleWriteAndSetScope(module, true);
            this.calls.push({name: 'stripModule', parameter: [module], result: module});
            return module;
        }
        ${script}
        `).bind(scope)();
    }


    public newSimOrAddDynamicModule(moduleName: string) {
        const module = this._option.modules[moduleName];
        if (module) {
            const newSim = SimGlobal.application?.simstanceManager.newSim(module)
            if (newSim) {
                return newSim;
            }
        }
    }

    public appendWrite(str: string) {
        this.writes += str;
    }

    public moduleWriteAndSetScope(module: Module) {
        if (module) {
            const uuid = RandomUtils.uuid();
            // console.log('moduleWriteAndSetScope', uuid, module);
            const targetSelecotr = module.getTemplateSelector(uuid)
            // const targetNode = new TargetNode(targetSelecotr, strip === true ? TargetNodeMode.replace : TargetNodeMode.child);
            const targetNode = new TargetNode(targetSelecotr, TargetNodeMode.replace);
            const scope = module.setScope(targetNode, uuid);
            if (scope) {
                this.appendWrite(module.getTemplateElementString(scope.uuid) ?? '');
            }
        }
    }
}
