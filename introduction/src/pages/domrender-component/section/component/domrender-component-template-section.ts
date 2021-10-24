import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-component-template-section.html'
import { DomrenderComponentAttrSection } from '../componentattr/domrender-component-attr-section';
@Sim()
@Component({
    selector: 'domrender-component-template-section',
    template,
    using: [DomrenderComponentAttrSection]
})
export class DomrenderComponentTemplateSection {
    title = 'component'
}
