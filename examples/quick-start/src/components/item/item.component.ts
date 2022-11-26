import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './item.html'
import style from './item.css'
@Sim
@Component({
    selector: 'item',
    template,
    styles: [style]
})
export class ItemComponent {
    name = '';
    age = 0;

    constructor() {
        console.log('new ProfileComponent');
    }
}