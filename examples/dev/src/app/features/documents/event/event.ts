import css from "./event.css";
import html from "./event.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";

@Sim()
export class Event extends Module {
    public data = 'data';

    constructor() {
        super({template: html, styleImports:[css]});
    }

    click() {
    }

}
