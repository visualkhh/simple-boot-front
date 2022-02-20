import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Component} from 'simple-boot-front/decorators/Component';

@Sim()
@Component({
    template: '<a>a</a>'
})
export class IndexComponent {

}