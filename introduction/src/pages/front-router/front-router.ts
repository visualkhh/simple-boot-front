import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-router.html'
import style from './front-router.css'
import { ApiService } from 'services/ApiService';
import { ScriptService } from 'simple-boot-front/service/ScriptService';
import { RouterTemplateSecthion } from './section/router-template-secthion';
@Sim()
@Component({
    template,
    styles: [style],
    using: [RouterTemplateSecthion]
})
export class FrontRouter implements OnInit {

    constructor() {
    }

    onInit(): void {
    }

}
