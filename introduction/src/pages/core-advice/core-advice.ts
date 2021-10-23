import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './core-advice.html'
import style from './core-advice.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class CoreAdvice implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
