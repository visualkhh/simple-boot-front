import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import template from './domrender-dr-for-of-section.html'

@Sim()
@Component({
    selector: 'domrender-dr-for-of-section',
    template
})
export class DomrenderDrForOfSection {
    public products = [
        {name: 'front', contributor: ['a', 'b', 'c']},
        {name: 'core', contributor: ['e', 'f', 'g']},
        {name: 'dom-render', contributor: ['h', 'i', 'j', 'k', 'l', 'm']},
    ];
}
