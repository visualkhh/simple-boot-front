import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './html.html';
import { UserService } from '../services/UserService';
import { UserServiceFront } from '../../front/UserServiceFront';
// import { UserService } from '../services/UserService';
// import { UserServiceFront } from '../../front/UserServiceFront';
@Sim()
@Component({
    template
})
export class UserComponent {

    constructor(userService: UserServiceFront) {
        console.log('why-----',userService.sayHello())
    }
    // constructor() {
    //     console.log('why-----')
    // }
}
