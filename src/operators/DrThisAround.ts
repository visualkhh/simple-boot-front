import { OperatorAround, OperatorExecuter } from 'dom-render/operators/OperatorExecuter';
import { ComponentSet } from 'dom-render/components/ComponentSet';
import { RawSet } from 'dom-render/rawsets/RawSet';
import { getComponent } from '../decorators/Component';

export class DrThisAround implements OperatorAround {
    public static readonly DR_THIS_TYPE_NAME = `${RawSet.DR_THIS_NAME}:type`;
    public static readonly DR_THIS_TYPE_OUTLET = 'outlet';
    public before(data: any, operatorExecutor: OperatorExecuter) {
        if (data && !(data instanceof ComponentSet) && operatorExecutor.elementSource.element.getAttribute(DrThisAround.DR_THIS_TYPE_NAME) === DrThisAround.DR_THIS_TYPE_OUTLET) {
            const component = getComponent(data);
            if (component) {
                const styles = component?.styles ?? [];
                const template = component?.template ?? '';
                return new ComponentSet(data, template, styles, {objPath: null});
            } else {
                return undefined;
            }
        }
        return data;
    }
}