import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-for-section.html'

@Sim()
@Component({
    selector: 'domrender-dr-for-section',
    template
})
export class DomrenderDrForSection {
    public products = [
        {name: 'front', value: 'front-value'},
        {name: 'core', value: 'core-value'},
        {name: 'dom-render', value: 'dom-value'},
    ];
}
