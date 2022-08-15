import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './user.html'
import style from './user.css'
import {OnInit} from 'simple-boot-front/lifecycle/OnInit';
import {OnInitRender} from 'dom-render/lifecycle/OnInitRender';
import {OnCreateRender} from 'dom-render/lifecycle/OnCreateRender';
@Sim
@Component({
    template,
    styles: [style]
})
export class User implements OnInit, OnCreateRender, OnInitRender {
    constructor() {
        console.log('User constructor');
    }

    onInit(...data: any): any {
        console.log('onInit', data)
    }

    onInitRender(data1: any, data2: any, data3: any): void {
        console.log('onInitRender', data1, data2, data3)
    }

    onCreateRender(...param: any[]): void {
        console.log('onCreateRender----->', param);
    }
}
