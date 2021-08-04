import css from './event.css';
import template from './event.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Event {
    public data = 'data';

    constructor() {
    }

    click() {
    }
}
