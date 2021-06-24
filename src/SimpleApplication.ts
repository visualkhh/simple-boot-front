import {SimOption} from './option/SimOption';
import {SimstanceManager} from './simstance/SimstanceManager';
import {SimGlobal} from './global/SimGlobal';
import {Runnable} from './run/Runnable';
import {IntentManager} from './intent/IntentManager';
import {RouterManager} from './router/RouterManager';

export class SimpleApplication implements Runnable {
    public simstanceManager: SimstanceManager;
    public intentManager: IntentManager;
    public routerManager: RouterManager;
    constructor(public option: SimOption) {
        this.simstanceManager = new SimstanceManager(this.option);
        this.intentManager = new IntentManager(this.simstanceManager);
        this.routerManager = new RouterManager(this.option, this.simstanceManager);
        SimGlobal.application = this;
    }

    public run() {
        this.simstanceManager.run();
        this.intentManager.run();
        this.routerManager.run()
    }
}
