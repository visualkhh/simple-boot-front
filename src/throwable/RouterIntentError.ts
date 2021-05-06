import {RouterError} from './RouterError';

export class RouterIntentError extends RouterError {
    constructor(message?: string, name?: string, stack?: string) {
        super(message, name, stack);
    }
}
