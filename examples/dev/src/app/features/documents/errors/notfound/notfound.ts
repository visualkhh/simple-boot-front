import css from "./notfound.css";
import html from "./notfound.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";

@Sim()
export class Notfound extends Module {
    constructor() {
        super({template: html, styleImports: [css]});
    }

    onInit() {
    }

}
