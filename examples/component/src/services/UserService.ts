import {Sim} from 'simple-boot-core/decorators/SimDecorator'

@Sim
export class UserService {
    constructor() {
        console.log('createUserService')
    }
}
