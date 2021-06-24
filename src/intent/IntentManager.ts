import 'reflect-metadata'
import {fromEvent} from 'rxjs';
import {EventType} from '../code/EventType';
import {filter, map} from 'rxjs/operators';
import {Intent} from './Intent';
import {ConstructorType} from '../types/Types';
import {SimstanceManager} from '../simstance/SimstanceManager';
import {Runnable} from '../run/Runnable';

export class IntentManager implements Runnable {

    constructor(public simstanceManager: SimstanceManager) {
    }

    public run() {
        fromEvent<CustomEvent<Intent>>(window, EventType.intent).pipe(
            filter(it => it.detail instanceof Intent),
            map(it => it.detail)
        ).subscribe(it => {
            this.simstanceManager?.getSimConfig(it.scheme).forEach((data) => {
                this.extracted(data.type, it);
            })
        });
    }

    private extracted(key: ConstructorType<any>, it: Intent) {
        let orNewSim = this.simstanceManager?.getOrNewSim(key) as any;
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

    publish(intent: Intent) {
        window.dispatchEvent(new CustomEvent(EventType.intent, {detail: intent}));
    }
}

// export const intentManager = new IntentManager();
