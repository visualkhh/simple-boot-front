import { ScopeObject } from 'dom-render/ScopeObject';
import { Scope } from 'dom-render/Scope';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';

export type ScopeObjectCalls = { name: string, parameter: any[], result: any }[];

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
                } catch(e) {
                    console.error(e);
                }
            }
        }
        `;
    }
}
