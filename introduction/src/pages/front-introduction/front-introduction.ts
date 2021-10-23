import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-introduction.html'
import style from './front-introduction.css'
import { ApiService } from 'services/ApiService';
import { CoreLifecycleSecthion } from '../core-introduction/section/lifecycle/core-lifecycle-secthion';
import { CoreFunctionSecthion } from '../core-introduction/section/function/core-function-secthion';
import { FrontLifecycleSecthion } from '../front-introduction/section/front-lifecycle-secthion';
import { DomrenderFunctionSecthion } from '../domrender-component/section/function/domrender-function-secthion';
@Sim()
@Component({
    template,
    styles: [style],
    using: [CoreLifecycleSecthion, FrontLifecycleSecthion, CoreFunctionSecthion, DomrenderFunctionSecthion]
})
export class FrontIntroduction implements OnInit {

    constructor(public apiService: ApiService) {
    }

    onInit(): void {
    }
}
