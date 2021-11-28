import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './html.html';
import { User, UserService } from '../services/UserService';
import { Inject } from 'simple-boot-core/decorators/inject/Inject';
import { UserServiceFront } from '../../front/UserServiceFront';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import { SayScript } from '../scripts/SayScript';
// import { UserService } from '../services/UserService';
// import { UserServiceFront } from '../../front/UserServiceFront';
@Sim()
@Component({
    template,
    using: [SayScript]
})
export class UserComponent implements OnInit {
    name = 'UserComponentUserComponent'
    user?: User;
    constructor(@Inject({scheme: 'UserService'}) public userService: UserService) {
        console.log('why-----',userService.sayHello())
    }

    onInit(): void {
        console.log('onInit')
        this.userService.getUserData({id: 2}).then(it => {
            this.user = it;
        });
    }

    request() {
        this.userService.getUserData({id: 1}).then(it => {
            this.user = it;
        });
    }
}
