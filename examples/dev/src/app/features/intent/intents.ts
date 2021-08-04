import {ProjectService} from '../../services/ProjectService';
import css from './intents.css';
import template from './intents.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {HttpService} from 'simple-boot-front/service/HttpService';
import {Intent} from 'simple-boot-core/intent/Intent';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Intents {
    public data = '---default data';

    constructor(public projectService: ProjectService, public ajax: HttpService) {
    }

    click() {
        console.log('------')
        // this.publish(new Intent('layout://info/data?a=wow&aa=zzz', this.makeRandom()));
    }

    makeRandom() {
        return Math.floor(RandomUtils.random(0, 100));
    }
}
