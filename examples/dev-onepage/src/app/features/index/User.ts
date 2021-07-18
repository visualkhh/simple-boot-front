import { FrontModule } from 'simple-boot-front/module/FrontModule';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim()
export class User extends FrontModule {
    public name = 'wow';
    constructor() {
        super({template: '<div><!--%write(this.name)%--></div>'});
        console.log('---')
    }
}
