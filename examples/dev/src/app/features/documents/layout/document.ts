import css from './document.css'
import html from './document.html'
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';

@Sim()
export class Document extends FrontModule {
    constructor() {
        super({template: html, styleImports: [css]});
    }
}
