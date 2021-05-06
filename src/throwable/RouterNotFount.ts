import {RouterError} from './RouterError';

export class RouterNotFount extends RouterError {
    constructor(message?: string, name?: string, stack?: string) {
        super(message, name, stack);
    }
}
