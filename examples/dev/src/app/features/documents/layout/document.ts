import css from "./document.css"
import html from './document.html'
import {Module} from "simple-boot-front/module/Module";
import {Sim} from "simple-boot-front/decorators/SimDecorator";

@Sim()
export class Document extends Module {

    constructor() {
        super({template: html, styleImports: [css]});
    }

}
