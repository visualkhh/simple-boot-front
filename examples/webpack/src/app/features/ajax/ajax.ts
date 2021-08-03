import { UserResponse } from "../../models/UserResponse";
import { Profile } from "../../shareds/Profile";
import { ProjectService } from "../../services/ProjectService";
import css from "raw-loader!./ajax.css";
import html from "./ajax.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {HttpService} from "../../../src/service/HttpService";

@Sim({scheme: "ajax"})
export class Ajax extends Module {
    styleImports = [css];
    template = html;

    public data: UserResponse | undefined;
    public profile: Profile | undefined;
    constructor(public projectService: ProjectService, public ajax: HttpService) {
        super("hello-world");
    }

    onInit() {
        this.data = undefined;
        this.profile = new Profile();
        this.loadData();
    }

    loadData() {
        this.ajax
            .getJson<UserResponse>("https://randomuser.me/api/")
            .subscribe((it) => {
                this.data = it;
                if (this.profile && this.data.results && this.data.results.length > 0) {
                    this.profile.setUser(this.data.results[0]);
                }
            });
    }
}
