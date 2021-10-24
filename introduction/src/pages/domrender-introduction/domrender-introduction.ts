import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-introduction.html'
import style from './domrender-introduction.css'
import { ApiService } from 'services/ApiService';
import { DomrenderFunctionSection } from './section/function/domrender-function-section';
import { DomrenderLifecycleSection } from './section/lifecycle/domrender-lifecycle-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [DomrenderFunctionSection, DomrenderLifecycleSection]
})
export class DomrenderIntroduction implements OnInit {
    public package?: {version: string, license: string};
    constructor(public apiService: ApiService) {
    }

    onInit(): void {
        this.apiService.getJson('https://visualkhh.github.io/dom-render/package.json').then(it => {
            this.package = it;
        })
    }
}
