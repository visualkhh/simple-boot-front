import {Sim} from "simple-boot-front/decorators/SimDecorator";

@Sim()
export class ProjectService {
    public calc(i: number, y: number) {
        return i + y
    }
}
