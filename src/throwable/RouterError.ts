import {SimError} from 'simple-boot-core/throwable/SimError';

export class RouterError extends SimError {
    constructor(message?: string, name?: string, stack?: string) {
        super(message, name, stack);
    }
}
