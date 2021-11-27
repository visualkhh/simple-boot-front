import css from 'app/features/documents/event/event.css';
import template from 'app/features/documents/event/event.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Event {
    public data = 'data';
    public name = 'event'
    constructor() {
    }

    click() {
    }
}
