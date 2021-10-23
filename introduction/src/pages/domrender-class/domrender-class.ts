import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-class.html'
import style from './domrender-class.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class DomrenderClass implements OnInit {

    constructor() {
    }
    onInit(): void {
    }

}
