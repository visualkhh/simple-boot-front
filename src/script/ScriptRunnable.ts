import { Runnable } from 'simple-boot-core/run/Runnable';
import { RawSet } from 'dom-render/rawsets/RawSet';
import { DomRenderProxy } from 'dom-render/DomRenderProxy';
export abstract class ScriptRunnable implements Runnable {
    public rawSets = new Map<RawSet, any>();
    public render() {
        this.rawSets.forEach((value, key) => {
            if (key.isConnected) {
                (value._DomRender_proxy as DomRenderProxy<any>)?.render([key]);
            } else {
                this.rawSets.delete(key);
            }
        })
    }
    abstract run(...arg: any): any;
}
