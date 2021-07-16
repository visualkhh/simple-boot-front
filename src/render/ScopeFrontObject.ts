import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {FrontModule} from '../module/FrontModule';
import {SimGlobal} from 'simple-boot-core/global/SimGlobal';
import {FrontModuleOption} from '../module/FrontModuleOption';
import {ScopeObject} from 'dom-render/ScopeObject';
import {TargetNode, TargetNodeMode} from 'dom-render/RootScope';
import {Config} from 'dom-render/Config';

export type ScopeObjectCalls = {name: string, parameter: any[], result: any}[];
export class ScopeFrontObject extends ScopeObject {
    declare _dynamicModule: Map<string, FrontModule[]>;
    declare _option: FrontModuleOption
    public calls: ScopeObjectCalls = [];
    [name: string]: any;

    constructor(config: Config, public uuid = RandomUtils.uuid()) {
        super(config);
    }

    public customScript(): string {
        return `
        const moduleIdAttrSelector = () => {
            return write("*[module-id='"+this.id+"']");
        }
        const module = (module) => {
            if (typeof module === 'string') {
                module = this.newSimOrAddDynamicModule(module);
            }
            this.moduleWriteAndSetScope(module, true);
            this.calls.push({name: 'module', parameter: [module], result: module});
            return module;
        }
        `;
    }

    public newSimOrAddDynamicModule(moduleName: string) {
        const module = this._option.modules[moduleName];
        if (module) {
            const newSim = SimGlobal().application?.simstanceManager.newSim(module)
            if (newSim) {
                return newSim;
            }
        }
    }

    public moduleWriteAndSetScope(module: FrontModule) {
        if (module) {
            const uuid = RandomUtils.uuid();
            const targetSelecotr = module.getTemplateSelector(uuid)
            const targetNode = new TargetNode(targetSelecotr, TargetNodeMode.replace);
            const scope = module.setScope(targetNode, uuid);
            if (scope) {
                this.appendWrite(module.getTemplateElementString(scope.uuid) ?? '');
            }
        }
    }
}
