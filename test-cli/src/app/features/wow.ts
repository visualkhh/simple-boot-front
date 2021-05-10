import {GOOD} from './good';

export class WOW {
    a: string;

    constructor(a: string) {
        this.a = a;
    }

    public print (): string {
        return this.a + '---';
    }
}

export class ZOZ {
    a: string;

    constructor(a: string) {
        this.a = a;
    }

    public print (): string {
        const good = new GOOD('good');
        return this.a + '-zzzz-' + good.print();
    }
}
