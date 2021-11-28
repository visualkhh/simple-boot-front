import { UserService } from '../src/services/UserService';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { User } from '../src/services/UserService';

@Sim({
    scheme: 'UserService'
})
export class UserServiceServer implements UserService {
    sayHello(): string {
        console.log('say server user hello')
        return 'server';
    }

    getUserData(param: User): Promise<User> {
        console.log('request data', param)
        return Promise.resolve({id: 1, name: 'visualkhh', email: 'vv@vv.com'});
    }

}
