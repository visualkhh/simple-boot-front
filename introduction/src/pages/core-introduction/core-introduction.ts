import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './core-introduction.html'
import style from './core-introduction.css'
import { ApiService } from 'services/ApiService';
import { CoreLifecycleSecthion } from './section/lifecycle/core-lifecycle-secthion';
import { CoreFunctionSecthion } from '../core-introduction/section/function/core-function-secthion';
@Sim()
@Component({
    template,
    styles: [style],
    using: [CoreLifecycleSecthion, CoreFunctionSecthion]
})
export class CoreIntroduction implements OnInit {

    constructor(public apiService: ApiService) {
    }

    onInit(): void {
    }
}
