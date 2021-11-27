import { UserService } from '../src/services/UserService';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim({
    scheme: 'UserService'
})
export class UserServiceFront implements UserService {

    constructor() {
        console.log('UserServiceFront created');
    }

    sayHello(): string {
        console.log('say front user hello')
        return 'front';
    }

}
