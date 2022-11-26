import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './profile.html'
@Sim
@Component({
    selector: 'profile',
    template
})
export class ProfileComponent {
    name = '';
    age = 0;

    constructor() {
        console.log('new ProfileComponent');
    }

    change(data: any) {
        console.log('-------', data)
    }
}