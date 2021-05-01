import {Sim} from '../decorators/SimDecorator'
import {SimpleApplication} from '../SimpleApplication';

// const {ajax} = require('rxjs/ajax')
@Sim()
export class Navigation {
    constructor() {
        console.log('-->', SimpleApplication)
    }
}
