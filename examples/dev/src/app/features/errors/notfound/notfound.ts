import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import template from './notfound.html'
import css from './notfound.css'
@Sim()
@Component({template, styles: [css]})
export class Notfound {
    constructor() {
    }

    onInit() {
    }
}
