import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-function.html'
import style from './domrender-function.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class DomrenderFunction implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
