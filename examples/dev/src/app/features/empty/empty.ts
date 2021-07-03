import { UserResponse } from "../../models/UserResponse";
import { Profile } from "../../shareds/Profile";
import { ProjectService } from "../../services/ProjectService";
import css from "./empty.css";
import html from "./empty.html";
import {Sim} from "simple-boot-core/decorators/SimDecorator";
import {FrontModule} from "simple-boot-front/module/FrontModule";
import {AjaxService} from "simple-boot-front/service/AjaxService";

@Sim()
export class Empty extends FrontModule {
    public data: UserResponse | undefined;
    public profile: Profile | undefined;
    constructor(public projectService: ProjectService, public ajax: AjaxService) {
        super({template: html, styleImports:[css]});
    }

    onInit() {
    }

}
