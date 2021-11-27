import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './main.html';
import { UserService } from '../services/UserService';
@Sim()
@Component({
    template
})
export class Main {

    constructor(userService: UserService) {
        console.log(userService.sayHello())
    }
}
