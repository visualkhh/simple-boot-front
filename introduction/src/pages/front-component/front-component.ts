import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-component.html'
import style from './front-component.css'
import { ApiService } from 'services/ApiService';
import { ScriptService } from 'simple-boot-front/service/ScriptService';
import { ComponentTemplateSecthion } from '../domrender-component/section/component-template-secthion';
@Sim()
@Component({
    template,
    styles: [style],
    using: [ComponentTemplateSecthion]
})
export class FrontComponent implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
