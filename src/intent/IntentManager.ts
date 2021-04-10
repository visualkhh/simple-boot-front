import 'reflect-metadata'
import {fromEvent} from 'rxjs';
import {EventType} from '../code/EventType';
import {filter, map} from 'rxjs/operators';
import {Intent} from './Intent';
import {simstanceManager} from '../simstance/SimstanceManager';
import {ConstructorType} from '../types/Types';

export class IntentManager {
    constructor() {

    }

    public init() {
        fromEvent<CustomEvent<Intent>>(window, EventType.intent).pipe(
            filter(it => it.detail instanceof Intent),
            map(it => it.detail)
        ).subscribe(it => {
            simstanceManager.configStorege.forEach((data, key, map) => {
                if (it.scheme && it.scheme === data?.scheme) {
                    this.extracted(key, it);
                } else if (!it.scheme) {
                    this.extracted(key, it);
                }
            })
        });
    }

    private extracted(key: ConstructorType<any>, it: Intent) {
        let orNewSim = simstanceManager.getOrNewSim(key) as any;
        if (orNewSim) {
            // console.log('-->', orNewSim, it.paths)
            if (it.paths.length > 1) {
                let callthis = orNewSim;
                let lastProp = '';
                it.paths.filter(i => i).forEach(i => {
                    callthis = orNewSim;
                    orNewSim = orNewSim?.[i]
                    lastProp = i;
                });
                if (orNewSim && typeof orNewSim === 'function') {
                    orNewSim.call(callthis, it);
                } else if (orNewSim) {
                    callthis[lastProp] = it.data;
                }
            } else {
                orNewSim?.subscribe?.(it);
            }
        }
    }
}

export const intentManager = new IntentManager();
