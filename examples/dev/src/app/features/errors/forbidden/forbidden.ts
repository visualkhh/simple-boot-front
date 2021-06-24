import { UserResponse } from "../../../models/UserResponse";
import { Profile } from "../../../shareds/Profile";
import { ProjectService } from "../../../services/ProjectService";
import css from "./forbidden.css";
import html from "./forbidden.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {AjaxService} from "simple-boot-front/service/AjaxService";

@Sim()
export class Forbidden extends Module {
    public data: UserResponse | undefined;
    public profile: Profile | undefined;
    constructor(public projectService: ProjectService, public ajax: AjaxService) {
        super({template: html, styleImports:[css]});
    }

    onInit() {
    }

}
