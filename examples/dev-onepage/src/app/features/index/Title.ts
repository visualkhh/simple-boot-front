import {FrontModule} from "simple-boot-front/module/Module";
import {RandomUtils} from "simple-boot-front/util/random/RandomUtils";
export class Title extends FrontModule {
    public datas = [1,23,44]
    aa() {
        this.value = Math.floor(RandomUtils.random(1,55))
        console.log('title scope->',this.datas, this._scopes, this._refModule)
    }
}
