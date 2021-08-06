import css from './forbidden.css';
import html from './forbidden.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { Component } from '../../src/decorators/Component';

@Sim()
@Component
export class Forbidden {
    constructor() {
        super({template: html, styleImports: [css]});
    }

    onInit() {
    }
}
