import {Router, RouterModuleOption} from './Router';
import {Module} from '../module/Module';

export class RouterModule {
    constructor(public router?: Router, public module?: Module, public moduleOption?: RouterModuleOption) {
    }
}
