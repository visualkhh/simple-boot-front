import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({
    template: `<div><!--%write(this.name)%--></div>`
})
export class User{
    public name = 'wow';
    constructor() {
        console.log('---')
    }
}
