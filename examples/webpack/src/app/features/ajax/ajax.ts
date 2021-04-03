import {Sim} from 'simple-boot-front/decorators/SimDecorator'
import {Module} from 'simple-boot-front/module/Module'
import {AjaxService} from 'simple-boot-front/service/AjaxService'
import {ViewService} from 'simple-boot-front/service/view/ViewService'
import html from './ajax.html'
import css from 'raw-loader!./ajax.css'
import {Profile} from '../../shareds/Profile'
import {UserResponse} from '@src/app/models/UserResponse'
import {ProjectService} from '@src/app/services/ProjectService'

@Sim()
export class Ajax extends Module {
    template = html
    styleImports = [css]
    public data: UserResponse | undefined
    public profile: Profile | undefined;
    private uuid: any
    constructor(public projectService: ProjectService, public v: ViewService, public ajax: AjaxService) {
        super('hello-world')
    }

    onInit() {
        this.data = undefined;
        this.profile = new Profile();
        this.loadData();
    }

    loadData() {
        this.ajax.getJson<UserResponse>('https://randomuser.me/api/').subscribe(it => {
            this.data = it;
            this.profile?.setUser(this.data.results[0])
        })
    }
}
