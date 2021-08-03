import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import {SimGlobal} from 'simple-boot-core/global/SimGlobal';
import {FrontModuleOption} from '../module/FrontModuleOption';
import {ScopeObject} from 'dom-render/ScopeObject';
import {TargetNode, TargetNodeMode} from 'dom-render/RootScope';
import {Config} from 'dom-render/Config';
import { Scope } from 'dom-render/Scope';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';

export type ScopeObjectCalls = {name: string, parameter: any[], result: any}[];
export class ScopeFrontObject extends ScopeObject {
    constructor(scope: Scope, public simstanceManager: SimstanceManager) {
        super(scope);
    }

    public customScript(): string {
        return `
        const component = (componentPrototype) => {
            // console.log('--component expression---->', componentPrototype)
            if (componentPrototype) {
                try{
                    include(this.simstanceManager.getOrNewSim(componentPrototype));
                    // console.log('---', this.simstanceManager.getOrNewSim(componentPrototype), componentPrototype)
                } catch(e) {
                    console.error(e);
                }
            }
        }
        `;
    }
}
