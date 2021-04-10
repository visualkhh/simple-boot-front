import {IntentEvent} from '../intent/IntentEvent';
import {Intent} from '../intent/Intent';
import {EventType} from '../code/EventType';

export abstract class SimBase implements IntentEvent {

    constructor() {
    }

    publish(intent: Intent): void {
        window.dispatchEvent(new CustomEvent(EventType.intent, {detail: intent}));
    }

    subscribe(intent: Intent): void {
    }
}
