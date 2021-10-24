import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './create-introduction.html'
import style from './create-introduction.css'
import { ApiService } from 'services/ApiService';
@Sim()
@Component({
    template,
    styles: [style]
})
export class CreateIntroduction implements OnInit {
    public package?: {version: string, license: string};
    constructor(public apiService: ApiService) {
    }

    onInit(): void {
        this.apiService.getJson('https://visualkhh.github.io/simple-boot-front/create/package.json').then(it => {
            this.package = it;
        })
    }
}
