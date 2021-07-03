import css from './forbidden.css';
import html from './forbidden.html';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';

@Sim()
export class Forbidden extends FrontModule {
    constructor() {
        super({template: html, styleImports: [css]});
    }

    onInit() {
    }
}
