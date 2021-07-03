import {Sim} from 'simple-boot-core/decorators/SimDecorator'
import {View} from '../../service/view/View';

@Sim()
export class ViewService {
    constructor() {
    }

    e<T extends Element>(selector: string): View<T> | undefined {
        try {
            const querySelector = document.querySelector<T>(selector)
            if (querySelector) {
                return new View<T>(querySelector)
            } else {
                return undefined
            }
        } catch (e) {
            return undefined
        }
    }

    eI<T extends Element = Element>(selector: string): View<T> | undefined {
        return this.e(`#${selector}`) ?? undefined
    }

    eC<T extends Element = Element>(selector: string): View<T> | undefined {
        return this.e(`.${selector}`) ?? undefined
    }
}
