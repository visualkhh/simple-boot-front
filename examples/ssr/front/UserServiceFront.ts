import { UserService } from '../src/services/UserService';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim()
export class UserServiceFront extends UserService {
    sayHello(): string {
        console.log('say front user hello')
        return 'front';
    }

}
