import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { SimFrontOption } from '../option/SimFrontOption';
import { StorageUtils } from 'dom-render/utils/storage/StorageUtils';

@Sim()
export class MetaTagService {
    constructor(public option: SimFrontOption) {
    }

    setMetaTag(selector: string, set: {[key:string]: string}) {
        const target = this.option.window.document.querySelector(selector);
        if (!target) {
            this.option.window.document.head.appendChild(this.createMetaTag(set));
        } else {
            Object.entries(set).forEach(([key, value]) => {
                if (null === value) {
                    target.removeAttribute(key);
                } else {
                    target.setAttribute(key, value);
                }
            });
        }
        //.setAttribute('content', set[selector]);
    }

    createMetaTag(set: { [p: string]: string }) {
        const meta = this.option.window.document.createElement('meta');
        Object.entries(set).forEach(([key, value]) => {
            if (null !== value) {
                meta.setAttribute(key, value);
            }
        });
        return meta;
    }
}
