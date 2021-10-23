import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './core-intent.html'
import style from './core-intent.css'
@Sim()
@Component({
    template,
    styles: [style]
})
export class CoreIntent implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
