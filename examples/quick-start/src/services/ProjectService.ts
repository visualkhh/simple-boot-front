import {Sim} from 'simple-boot-core/decorators/SimDecorator';

@Sim()
export class ProjectService {
    sum(a: number, b: number): number {
        return a + b;
    }
}