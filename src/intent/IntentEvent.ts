import {Intent} from './Intent';

export interface IntentEvent {
    publish(intent: Intent): void;
    subscribe(intent: Intent): void;
}
