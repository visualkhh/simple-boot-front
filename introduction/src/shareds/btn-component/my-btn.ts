import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './my-btn.html'
import style from './my-btn.css'
@Sim()
@Component({
    selector: 'my-btn',
    template,
    styles: [style]
})
export class MyBtn {
    say(data: string) {
        console.log('say:', data);
    }
}
