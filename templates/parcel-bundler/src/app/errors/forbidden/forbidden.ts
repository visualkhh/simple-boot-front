import css from './forbidden.css';
import template from './forbidden.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Forbidden {
    onInit() {
    }
}
