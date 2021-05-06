import {SimError} from './SimError';

export class RouterError extends SimError {
    constructor(message?: string, name?: string, stack?: string) {
        super(message, name, stack);
    }
}
