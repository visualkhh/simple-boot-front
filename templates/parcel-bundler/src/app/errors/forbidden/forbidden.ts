import css from "./forbidden.css";
import html from "./forbidden.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";

@Sim()
export class Forbidden extends Module {
    constructor() {
        super({template: html, styleImports:[css]});
    }

    onInit() {
    }

}
