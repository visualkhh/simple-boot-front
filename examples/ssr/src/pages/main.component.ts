import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './html.html';
import { UserService } from '../services/UserService';
import { Inject } from 'simple-boot-core/decorators/inject/Inject';
import { UserServiceFront } from '../../front/UserServiceFront';
// import { UserService } from '../services/UserService';
// import { UserServiceFront } from '../../front/UserServiceFront';
@Sim()
@Component({
    template: '<div>mmmmmmm</div>',
    // using: [UserServiceFront]
})
export class MainComponent {
    constructor(@Inject({scheme: 'UserService'}) userService: UserService) {
        console.log('why main-----',userService.sayHello())
    }
    // constructor() {
    //     console.log('why-----')
    // }
}
