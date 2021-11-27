import { UserService } from '../src/services/UserService';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim({
    scheme: 'UserService'
})
export class UserServiceServer implements UserService {
    sayHello(): string {
        console.log('say server user hello')
        return 'server';
    }

}
