import {SimFrontOption} from './option/SimFrontOption';
import {SimpleApplication} from 'simple-boot-core/SimpleApplication';
import {SimFrontProxyHandler} from './proxy/SimFrontProxyHandler';
import {ConstructorType} from 'simple-boot-core/types/Types';
import {Navigation} from './service/Navigation';
import {Intent} from 'simple-boot-core/intent/Intent';
import {FrontRouter} from './router/FrontRouter';
import {FrontModule} from './module/FrontModule';
import {FunctionUtils} from 'simple-boot-core/utils/function/FunctionUtils';
import {fromEvent} from 'rxjs';
import {TargetNode, TargetNodeMode} from 'dom-render/RootScope';
import { RouteRender } from './router/RouteRender';

export class SimpleBootFront extends SimpleApplication {
    public routeRender: RouteRender;
    constructor(public rootRouter: ConstructorType<FrontRouter>, public option: SimFrontOption) {
        super(rootRouter, option);
        window.__dirname = 'simple-boot-front__dirname';
        option.simProxy = new SimFrontProxyHandler(option);
        this.routeRender = new RouteRender(this.option, this.simstanceManager);
    }

    public run() {
        super.run();
        const navigation = this.simstanceManager.getOrNewSim(Navigation)!
        fromEvent<any>(window, 'popstate').subscribe((_) => {
            const intent = new Intent(navigation.path ?? '');
            this.routing<FrontRouter, FrontModule>(intent).then(async it => {
                this.routeRender.routeRender(it, document);
            })
        })
        window.dispatchEvent(new Event('popstate'))
    }
}
