import { UserResponse } from '../../models/UserResponse';
import { ProjectService } from '../../services/ProjectService';
import css from './empty.css';
import template from './empty.html';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {HttpService} from 'simple-boot-front/service/HttpService';
import { Component } from 'simple-boot-front/decorators/Component';

@Sim()
@Component({template, styles: [css]})
export class Empty {
    public data: UserResponse | undefined;
    constructor(public projectService: ProjectService, public ajax: HttpService) {
    }

    onInit() {
    }
}
