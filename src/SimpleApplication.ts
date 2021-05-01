import 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import {SimOption} from './option/SimOption';
import {SimstanceManager} from './simstance/SimstanceManager';
import {SimGlobal} from './global/SimGlobal';
import {Runnable} from './run/Runnable';
import {IntentManager} from './intent/IntentManager';
import {RouterManager} from './router/RouterManager';

export class SimpleApplication implements Runnable {
    public simstanceManager: SimstanceManager;
    public intentManager: IntentManager;
    private option: SimOption;
    private routerManager: RouterManager;
    constructor(_option = new SimOption()) {
        this.option = Object.assign(new SimOption(), _option)
        this.simstanceManager = new SimstanceManager(this.option);
        this.intentManager = new IntentManager();
        this.routerManager = new RouterManager();
        SimGlobal.application = this;
    }

    public run() {
        this.simstanceManager.run();
        this.intentManager.run(this.simstanceManager);
        this.routerManager.run(this.option, this.simstanceManager)
    }
}
