import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { FrontLifeCycle } from 'simple-boot-front/module/FrontLifeCycle';

@Sim()
@Component({
    template: '<div id="uu">zzzzzzzzz ${this.name}</div>'
})
export class User implements FrontLifeCycle {
    public name = 'wow';
    constructor() {
        console.log('---')
    }

    onChangedRender(): void {
        console.log('--user onChangedRender')
    }

    onCreate(): void {
        console.log('--user onCreate')
    }

    onFinish(): void {
        console.log('--user  onFinish')
    }

    onInit(): void {
        console.log('--user  onInit')
        // alert()
        console.log(document.querySelector('#uu')?.innerHTML)
    }

    onInitedChild(): void {
        console.log('--user  onInitedChild')
    }

    onInitRender(): void {
    }
}
