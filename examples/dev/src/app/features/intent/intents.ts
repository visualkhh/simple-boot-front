import { UserResponse } from "../../models/UserResponse";
import { Profile } from "../../shareds/Profile";
import { ProjectService } from "../../services/ProjectService";
import css from "./intents.css";
import html from "./intents.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {AjaxService} from "simple-boot-front/service/AjaxService";
import {Intent} from 'simple-boot-front/intent/Intent';
import {RandomUtils} from 'simple-boot-front/util/random/RandomUtils';

@Sim()
export class Intents extends Module {
    public data = '---default data';
    public profile: Profile | undefined;

    constructor(public projectService: ProjectService, public ajax: AjaxService) {
        super({template: html, styleImports:[css]});
    }

    click() {
        this.publish(new Intent('layout://info/data?a=wow&aa=zzz', this.makeRandom()));
    }

    makeRandom() {
        return Math.floor(RandomUtils.random(0, 100));
    }

}
