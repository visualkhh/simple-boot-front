import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { SimFrontOption } from '../option/SimFrontOption';
import { StorageUtils } from 'dom-render/utils/storage/StorageUtils';

@Sim
export class MetaTagService {
    constructor(public option: SimFrontOption) {
    }

    /*
        <meta property="og:url" content="공유시 이동 url">
        <meta property="og:title" content="공유시 보여질 제목">
        <meta property="og:type" content="website">
        <meta property="og:image" content="공유시 보여질 이미지 경로">
        <meta property="og:description" content="공유시 보여질 설명">
        // this.metaTagService.setMetaTag('meta[property="og:image"]', {content: atData.url ?? '/assets/images/guest-pet.png'})
     */
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
        // .setAttribute('content', set[selector]);
    }

    createMetaTag(set: { [p: string]: string }) {
        const meta = this.option.window.document.createElement('meta');
        Object.entries(set).forEach(([key, value]) => {
            if (value !== null) {
                meta.setAttribute(key, value);
            }
        });
        return meta;
    }
}
