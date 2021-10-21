import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-component.html'
import style from './front-component.css'
import { ApiService } from 'services/ApiService';
import { ScriptService } from 'simple-boot-front/service/ScriptService';
@Sim()
@Component({
    template,
    styles: [style]
})
export class FrontComponent implements OnInit {
   public createHTML =
`
<h1>'\${this}'</h1>
<div dr-inner-html="this.html"></div>
`
   public createTypeScript =
`
@Sim()
@Component({
  selector: 'index',
  template,
  styles: [style]
})
export class Index {
  public title = ''
  public html = ''
  public setData(title: string, html: string) {
    this.title = title;
    this.html = html;
  }
}
`
    public usingTypeScript =
`constructor(index: Index){...}`
    public usingHTML =
`
<index></index>
<!-- dr-set: $index.setData('data'); $element, $innerHTML, $attributes -->
<index dr-set="$index.setData('hello component', $innerHTML)"></index>
`

    constructor() {
    }

    onInit(): void {
    }
    getMarkdown() {
    }
}
