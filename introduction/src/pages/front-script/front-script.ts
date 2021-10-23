import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-script.html'
import style from './front-script.css'
import { ApiService } from 'services/ApiService';
import { ScriptService } from 'simple-boot-front/service/ScriptService';
@Sim()
@Component({
    template,
    styles: [style]
})
export class FrontScript implements OnInit {

    constructor() {
    }
    onInit(): void {
    }

}
