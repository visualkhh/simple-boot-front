import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './cli-introduction.html'
import style from './cli-introduction.css'
import { ApiService } from 'services/ApiService';
@Sim()
@Component({
    template,
    styles: [style]
})
export class CliIntroduction implements OnInit {

    constructor(public apiService: ApiService) {
    }

    onInit(): void {
    }
}
