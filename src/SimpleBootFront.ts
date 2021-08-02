import { SimFrontOption } from './option/SimFrontOption';
import { SimpleApplication } from 'simple-boot-core/SimpleApplication';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { Navigation } from './service/Navigation';
import { Intent } from 'simple-boot-core/intent/Intent';
import { fromEvent } from 'rxjs';
import { RouteRender } from './router/RouteRender';
import { getComponent } from './decorators/Component';
import { DomRender } from '../libs/dom-render/dist/DomRender';

export class SimpleBootFront extends SimpleApplication {
    public routeRender: RouteRender;

    constructor(public rootRouter: ConstructorType<any>, public option: SimFrontOption) {
        super(rootRouter, option);
        window.__dirname = 'simple-boot-front__dirname';
        option.proxy = {
            onProxy: (it: any) => {
                const component = getComponent(it);
                if (component) {
                    // console.log('getComponent-->', it, component);
                    return DomRender.proxy(it, {template: component.template ?? '', styles: component.styles})
                }
                return it;
            }
        };
        // option.simProxy = new SimFrontProxyHandler(option);
        this.routeRender = new RouteRender(this.option, this.simstanceManager);
    }

    public run() {
        super.run();
        const navigation = this.simstanceManager.getOrNewSim(Navigation)!
        fromEvent<any>(window, 'popstate').subscribe((_) => {
            const intent = new Intent(navigation.path ?? '');
            this.routing(intent).then(async it => {
                console.log('--routing->', it)
                this.routeRender.routeRender(it, document);
            })
        })
        window.dispatchEvent(new Event('popstate'))
    }
}
