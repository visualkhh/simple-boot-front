import { UserResponse } from "../../models/UserResponse";
import { Profile } from "../../shareds/Profile";
import { ProjectService } from "../../services/ProjectService";
import css from "./intents.css";
import html from "./intents.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {HttpService} from "../../../src/service/HttpService";
import {Intent} from 'simple-boot-front/intent/Intent';
import {RandomUtils} from 'simple-boot-front/util/random/RandomUtils';

@Sim()
export class Intents extends Module {
    styleImports = [css];
    template = html;
    public data = '---default data';
    public profile: Profile | undefined;

    constructor(public projectService: ProjectService, public ajax: HttpService) {
        super("intent");
    }

    click() {
        this.publish(new Intent('layout://info/data?a=wow&aa=zzz', this.makeRandom()));
    }

    makeRandom() {
        return Math.floor(RandomUtils.random(0, 100));
    }

}
