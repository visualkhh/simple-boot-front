import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-introduction.html'
import style from './front-introduction.css'
import { ApiService } from 'services/ApiService';
import { CoreLifecycleSection } from '../core-introduction/section/lifecycle/core-lifecycle-section';
import { CoreFunctionSection } from '../core-introduction/section/function/core-function-section';
import { FrontLifecycleSection } from '../front-introduction/section/lifecycle/front-lifecycle-section';
import { DomrenderFunctionSection } from '../domrender-introduction/section/function/domrender-function-section';
import { DomrenderLifecycleSection } from '../domrender-introduction/section/lifecycle/domrender-lifecycle-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [CoreLifecycleSection, FrontLifecycleSection, CoreFunctionSection, DomrenderFunctionSection, DomrenderLifecycleSection]
})
export class FrontIntroduction implements OnInit {
    public package?: {version: string, license: string};
    constructor(public apiService: ApiService) {
    }

    onInit(): void {
        this.apiService.getJson('https://visualkhh.github.io/simple-boot-front/package.json').then(it => {
            this.package = it;
        })
    }
}
