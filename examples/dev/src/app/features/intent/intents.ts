import {Profile} from '../../shareds/Profile';
import {ProjectService} from '../../services/ProjectService';
import css from './intents.css';
import html from './intents.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {FrontModule} from 'simple-boot-front/module/FrontModule';
import {AjaxService} from 'simple-boot-front/service/AjaxService';
import {Intent} from 'simple-boot-core/intent/Intent';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';

@Sim()
export class Intents extends FrontModule {
    public data = '---default data';
    public profile: Profile | undefined;

    constructor(public projectService: ProjectService, public ajax: AjaxService) {
        super({template: html, styleImports: [css]});
    }

    click() {
        this.publish(new Intent('layout://info/data?a=wow&aa=zzz', this.makeRandom()));
    }

    makeRandom() {
        return Math.floor(RandomUtils.random(0, 100));
    }
}
