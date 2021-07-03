import {Router} from './Router';
import {FrontModule} from '../module/FrontModule';

export class RouterModule {
    constructor(public router?: Router, public module?: FrontModule) {
    }
}
