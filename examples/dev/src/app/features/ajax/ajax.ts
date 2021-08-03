import {UserResponse} from '../../models/UserResponse';
import {Profile} from '../../shareds/Profile';
import {ProjectService} from '../../services/ProjectService';
import css from './ajax.css';
import html from './ajax.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {HttpService} from 'simple-boot-front/service/HttpService';
import {Intent} from 'simple-boot-core/intent/Intent';

@Sim({scheme: 'ajax'})
export class Ajax extends FrontModule {
    public data: UserResponse | undefined;
    public profile: Profile | undefined;

    constructor(public projectService: ProjectService, public ajax: HttpService) {
        super({template: html, styleImports: [css]});
    }

    onInit() {
        this.data = undefined;
        this.profile = new Profile();
        this.loadData();
    }

    sync() {
        if (this.profile && this.data) {
            this.profile.setUser(this.data.results[0]);
        }
    }

    goo(intent: Intent) {
        console.log('-->', intent)
    }

    loadData() {
        this.ajax
            .getJson<UserResponse>('https://randomuser.me/api/')
            .subscribe((it) => {
                this.data = it;
                if (this.profile && this.data.results && this.data.results.length > 0) {
                    this.profile.setUser(this.data.results[0]);
                }
            });
    }
}
