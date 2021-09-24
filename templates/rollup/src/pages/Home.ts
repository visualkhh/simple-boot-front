import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim()
@Component({
    template: '<div>home</div>'
})
export class Home {

}
