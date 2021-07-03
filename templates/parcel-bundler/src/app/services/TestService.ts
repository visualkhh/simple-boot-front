import {Sim} from 'simple-boot-core/decorators/SimDecorator';

@Sim()
export class TestService {
    constructor() {
        console.log('testService Constructor')
    }

    public calc(i: number, y: number) {
        return i + y
    }

    public tail(origin: string | number, tail: string) {
        return origin + tail;
    }
}
