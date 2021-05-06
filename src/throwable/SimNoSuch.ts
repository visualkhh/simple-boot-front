import {SimError} from './SimError';

export class SimNoSuch extends SimError {
    constructor(message?: string, name?: string, stack?: string) {
        super(message, name, stack);
    }
}
