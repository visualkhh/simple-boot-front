import { ProjectService } from '../../../services/ProjectService';
import css from './forbidden.css';
import template from './forbidden.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {HttpService} from 'simple-boot-front/service/HttpService';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Forbidden {
    constructor(public projectService: ProjectService, public ajax: HttpService) {
    }

    onInit() {
    }
}
