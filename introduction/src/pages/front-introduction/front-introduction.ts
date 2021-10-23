import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-introduction.html'
import style from './front-introduction.css'
import { ApiService } from 'services/ApiService';
import { ScriptUtils } from 'dom-render/utils/script/ScriptUtils';
@Sim()
@Component({
    template,
    styles: [style]
})
export class FrontIntroduction implements OnInit {

    constructor(public apiService: ApiService) {
    }

    onInit(): void {
    }
    getMarkdown() {
    }
}
