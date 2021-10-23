import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-script.html'
import style from './domrender-script.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class DomrenderScript implements OnInit {

    constructor() {
    }
    onInit(): void {
    }

}
