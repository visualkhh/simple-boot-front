import css from './event.css';
import html from './event.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {FrontModule} from 'simple-boot-front/module/FrontModule';

@Sim()
export class Event extends FrontModule {
    public data = 'data';

    constructor() {
        super({template: html, styleImports: [css]});
    }

    click() {
    }
}
