import {Sim} from 'simple-boot-front/src/com/simple/boot/decorators/SimDecorator'

@Sim()
export class ProjectService {
    public calc(i: number, y: number) {
        return i + y
    }
}
