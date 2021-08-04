import {UserResponse} from '../../models/UserResponse';
import {ProjectService} from '../../services/ProjectService';
import css from './ajax.css';
import template from './ajax.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {HttpService} from 'simple-boot-front/service/HttpService';
import {Intent} from 'simple-boot-core/intent/Intent';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim({scheme: 'ajax'})
@Component({template, styles: [css]})
export class Ajax {
    public data: UserResponse | undefined;

    constructor(public projectService: ProjectService, public ajax: HttpService) {
    }

    onInit() {
        this.data = undefined;
        this.loadData();
    }

    sync() {
    }

    goo(intent: Intent) {
        console.log('-->', intent)
    }

    loadData() {
    }
}
