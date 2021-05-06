export class SimError {
    message?: string;
    name?: string;
    stack?: string;

    constructor(message?: string, name?: string, stack?: string) {
        this.message = message;
        this.name = name;
        this.stack = stack;
    }
}
