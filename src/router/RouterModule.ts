import {Router} from './Router';
import {Module} from '../module/Module';
import {ConstructorType} from "../types/Types";

export class RouterModule {
    constructor(public router?: Router, public module?: Module, notfound?: ConstructorType<Module>) {
    }
}
