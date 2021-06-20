import {Module} from "simple-boot-front/module/Module";
export class Title extends Module {
    public datas = [1,23,44]
    aa() {
        console.log('title scope->',this.datas, this._scopes, this._refModule)
    }
}
