import {SimFrontOption} from './option/SimFrontOption';
import {RouterManager} from './router/RouterManager';
import {SimpleApplication} from 'simple-boot-core/SimpleApplication';
import {SimFrontProxyHandler} from './proxy/SimFrontProxyHandler';

export class SimpleBootFront extends SimpleApplication {
    public routerManager: RouterManager;
    constructor(public option: SimFrontOption) {
        super(option);
        option.simProxy = new SimFrontProxyHandler(option);
        this.routerManager = new RouterManager(this.option, this.simstanceManager);
    }

    public run() {
        super.run();
        this.routerManager.run()
    }
}
