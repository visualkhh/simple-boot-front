import { UserResponse } from "../../models/UserResponse";
import { Profile } from "../../shareds/Profile";
import { ProjectService } from "../../services/ProjectService";
import css from "./ajax.css";
import html from "./ajax.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {AjaxService} from "simple-boot-front/service/AjaxService";

@Sim({id: "ww"})
export class Ajax extends Module {
    styleImports = [css];
    template = html;

    public data: UserResponse | undefined;
    public profile: Profile | undefined;
    private uuid: any;
    constructor(public projectService: ProjectService, public ajax: AjaxService) {
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
