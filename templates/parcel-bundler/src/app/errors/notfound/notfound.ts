import css from './notfound.css';
import template from './notfound.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Notfound {
    onInit() {
    }
}
