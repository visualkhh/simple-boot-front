import {ComponentSet as DomRenderComponentSet} from 'dom-render/components/ComponentSet'
import {getComponent} from '../decorators/Component';
export class ComponentSet extends DomRenderComponentSet {
    constructor(obj: any) {
        super(obj);
        const component = getComponent(obj);
        if (component) {
            this.styles = component?.styles ?? [];
            this.template = component?.template ?? '';
        }
    }
}
