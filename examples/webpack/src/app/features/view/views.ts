import {Profile} from "../../shareds/Profile";
import {ProjectService} from "../../services/ProjectService";
import css from "raw-loader!./views.css";
import html from "./views.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {HttpService} from "../../../src/service/HttpService";
import {RandomUtils} from 'simple-boot-front/util/random/RandomUtils';
import {View} from "simple-boot-front/service/view/View";

@Sim()
export class Views extends Module {
    styleImports = [css];
    template = html;
    public data = 'data';
    public profile: Profile | undefined;

    public a = new View<Element>('#input', this);

    constructor(public projectService: ProjectService, public ajax: HttpService) {
        super("view");
    }

    click() {
        this.data = 'data:' + Math.floor(RandomUtils.random(0, 100))
        console.log('-->', this.a.e)
    }

}
