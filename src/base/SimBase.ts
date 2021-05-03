import {IntentEvent} from '../intent/IntentEvent';
import {Intent} from '../intent/Intent';
import {SimGlobal} from '../global/SimGlobal';

export abstract class SimBase implements IntentEvent {
    constructor() {
    }

    publish(intent: Intent): void {
        SimGlobal?.application?.intentManager.publish(intent)
    }

    subscribe(intent: Intent): void {
    }
}
