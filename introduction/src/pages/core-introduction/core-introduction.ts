import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './core-introduction.html'
import style from './core-introduction.css'
import { ApiService } from 'services/ApiService';
import { CoreLifecycleSection } from './section/lifecycle/core-lifecycle-section';
import { CoreFunctionSection } from './section/function/core-function-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [CoreLifecycleSection, CoreFunctionSection]
})
export class CoreIntroduction implements OnInit {

    constructor(public apiService: ApiService) {
    }

    onInit(): void {
    }
}
