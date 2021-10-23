import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-config.html'
import style from './domrender-config.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class DomrenderConfig implements OnInit {

    constructor() {
    }
    onInit(): void {
    }

}
