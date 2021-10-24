import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-component-attr-section.html'
@Sim()
@Component({
    selector: 'domrender-component-attr-section',
    template
})
export class DomrenderComponentAttrSection {
    title = 'tagName and variable in attribute'
}
