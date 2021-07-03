import css from "./notfound.css";
import html from "./notfound.html";
import {Sim} from "simple-boot-core/decorators/SimDecorator";
import {FrontModule} from "simple-boot-front/module/FrontModule";

@Sim()
export class Notfound extends FrontModule {
    constructor() {
        super({template: html, styleImports: [css]});
    }

    onInit() {
    }

}
