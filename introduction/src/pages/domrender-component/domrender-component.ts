import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-component.html'
import style from './domrender-component.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class DomrenderComponent implements OnInit {

    constructor() {
    }
    onInit(): void {
    }

}
