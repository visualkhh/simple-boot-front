import { UserResponse } from "../../models/UserResponse";
import { Profile } from "../../shareds/Profile";
import { ProjectService } from "../../services/ProjectService";
import css from "raw-loader!./empty.css";
import html from "./empty.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {HttpService} from "../../../src/service/HttpService";

@Sim()
export class Empty extends Module {
    styleImports = [css];
    template = html;
    public data: UserResponse | undefined;
    public profile: Profile | undefined;
    constructor(public projectService: ProjectService, public ajax: HttpService) {
        super("empty-world");
    }

    onInit() {
    }

}
