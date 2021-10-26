import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './domrender-function.html'
import style from './domrender-function.css'
import { DomrenderExpressionSection } from './section/expression/domrender-expression-section';
import { DomrenderDrIfSection } from './section/dr-if/domrender-dr-if-section';
import { DomrenderDrRepeatSection } from './section/dr-repeat/domrender-dr-repeat-section';
import { DomrenderDrForSection } from './section/dr-for/domrender-dr-for-section';
import { DomrenderDrForOfSection } from './section/dr-for-of/domrender-dr-for-of-section';
import { DomrenderDrInnerTextSection } from './section/dr-inner-text/domrender-dr-inner-text-section';
import { DomrenderDrInnerHtmlSection } from './section/dr-inner-html/domrender-dr-inner-html-section';
import { DomrenderDrEventClickSection } from './section/dr-event-click/domrender-dr-event-click-section';
import { DomrenderEventAttributeValuesSection } from './section/dr-event/domrender-event-attribute-values-section/domrender-event-attribute-values-section';
import { DomrenderDrEventMousedownSection } from './section/dr-event-mousedown/domrender-dr-event-mousedown-section';
import { DomrenderDrEventMouseupSection } from './section/dr-event-mouseup/domrender-dr-event-mouseup-section';
import { DomrenderDrEventDblclickSection } from './section/dr-event-dblclick/domrender-dr-event-dblclick-section';
import { DomrenderDrEventMouseoverSection } from './section/dr-event-mouseover/domrender-dr-event-mouseover-section';
import { DomrenderDrEventMousemoveSection } from './section/dr-event-mousemove/domrender-dr-event-mousemove-section';
import { DomrenderDrEventMouseenterSection } from './section/dr-event-mouseenter/domrender-dr-event-mouseenter-section';
import { DomrenderDrEventMouseleaveSection } from './section/dr-event-mouseleave/domrender-dr-event-mouseleave-section';
import { DomrenderDrEventContextmenuSection } from './section/dr-event-contextmenu/domrender-dr-event-contextmenu-section';
import { DomrenderDrEventKeyupSection } from './section/dr-event-keyup/domrender-dr-event-keyup-section';
import { DomrenderDrEventKeydownSection } from './section/dr-event-keydown/domrender-dr-event-keydown-section';
import { DomrenderDrEventKeypressSection } from './section/dr-event-keypress/domrender-dr-event-keypress-section';
import { DomrenderDrEventChangeSection } from './section/dr-event-change/domrender-dr-event-change-section';
import { DomrenderDrEventInputSection } from './section/dr-event-input/domrender-dr-event-input-section';
import { DomrenderDrEventSubmitSection } from './section/dr-event-submit/domrender-dr-event-submit-section';
import { DomrenderDrEventResizeSection } from './section/dr-event-resize/domrender-dr-event-resize-section';
import { DomrenderDrEventFocusSection } from './section/dr-event-focus/domrender-dr-event-focus-section';
import { DomrenderDrEventBlurSection } from './section/dr-event-blur/domrender-dr-event-blur-section';
import { DomrenderDrWindowEventPopstateSection } from './section/dr-window-event-popstate/domrender-dr-window-event-popstate-section';
import { DomrenderDrEventSection } from './section/dr-event/domrender-dr-event-section';
import { DomrenderDrWindowEventResizeSection } from './section/dr-window-event-resize/domrender-dr-window-event-resize-section';
import { DomrenderDrAttrSection } from './section/dr-attr/domrender-dr-attr-section';
import { DomrenderDrClassSection } from './section/dr-class/domrender-dr-class-section';
import { DomrenderDrStyleSection } from './section/dr-style/domrender-dr-style-section';
import { DomrenderDrStripSection } from './section/dr-strip/domrender-dr-strip-section';
@Sim()
@Component({
    template,
    styles: [style],
    using: [DomrenderExpressionSection, DomrenderDrIfSection, DomrenderDrRepeatSection,
        DomrenderDrForSection, DomrenderDrForOfSection,
        DomrenderDrInnerTextSection, DomrenderDrInnerHtmlSection,
        DomrenderDrEventClickSection, DomrenderEventAttributeValuesSection,
        DomrenderDrEventMousedownSection, DomrenderDrEventMouseupSection, DomrenderDrEventDblclickSection, DomrenderDrEventMouseoverSection, DomrenderDrEventMousemoveSection, DomrenderDrEventMouseenterSection, DomrenderDrEventMouseleaveSection, DomrenderDrEventContextmenuSection,
        DomrenderDrEventKeyupSection, DomrenderDrEventKeydownSection, DomrenderDrEventKeypressSection, DomrenderDrEventChangeSection,DomrenderDrEventInputSection,
        DomrenderDrEventSubmitSection, DomrenderDrEventResizeSection, DomrenderDrEventFocusSection, DomrenderDrEventBlurSection,DomrenderDrWindowEventPopstateSection, DomrenderDrEventSection, DomrenderDrWindowEventResizeSection,
        DomrenderDrAttrSection, DomrenderDrClassSection, DomrenderDrStyleSection, DomrenderDrStripSection
    ]
})
export class DomrenderFunction implements OnInit {

    constructor() {
    }

    onInit(): void {
    }
}
