import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './html.html';
@Sim()
@Component({
    template
})
export class UserComponent {

    constructor() {
        console.log('UserComponent constructor');
    }
}
