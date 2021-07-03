import css from "./introduction.css";
import html from "./introduction.html";
import {Sim} from "simple-boot-core/decorators/SimDecorator";
import {FrontModule} from "simple-boot-front/module/FrontModule";

@Sim()
export class Introduction extends FrontModule {
    public data = 'data';

    constructor() {
        super({template: html, styleImports:[css]});
    }

    click() {
    }

}
