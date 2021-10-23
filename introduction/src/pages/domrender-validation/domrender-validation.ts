import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-validation.html'
import style from './domrender-validation.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class DomrenderValidation implements OnInit {

    constructor() {
    }
    onInit(): void {
    }

}
