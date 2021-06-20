import {Module} from "simple-boot-front/module/Module";
export class Title extends Module {
    aa() {
        console.log('title scope->',this._scopes, this._refModule)
    }
}
