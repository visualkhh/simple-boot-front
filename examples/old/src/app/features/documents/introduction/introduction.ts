import template from 'app/features/documents/introduction/introduction.html';
import css from 'app/features/documents/introduction/introduction.css';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Introduction {
    public data = 'data';
    public name = 'introduction'
    constructor() {
    }

    click() {
    }
}
