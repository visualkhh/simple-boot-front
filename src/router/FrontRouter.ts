import {FrontModule} from '../module/FrontModule'
import {ConstructorType} from 'simple-boot-core/types/Types'
import {Router} from 'simple-boot-core/route/Router';

export class FrontRouter extends Router {
    [name: string]: ConstructorType<FrontModule> | any;

    constructor(public path: string, public module?: ConstructorType<FrontModule>, public childs: ConstructorType<Router>[] = []) {
        super(path, childs);
    }
}
