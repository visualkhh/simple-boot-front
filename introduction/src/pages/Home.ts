import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './home.html'
import style from './home.css'
declare const toastui: any;
declare const hljs: any;
@Sim()
@Component({
    template,
    styles: [style]
})
export class Home implements OnInit {
    public data = `
        @Sim()
        @Component({ \${this}
            template: '<div>home</div>'
        })
        export class Home {
        }
    `
    public dataHtml = `
<pre>
  <code class="typescript" dr-inner-html="hljs.highlight(this.data, {language: 'typescript'}).value">
  </code>
</pre>
<per>
    <button router-link="/user">user</button>
</per>
<pre><code class="html"
    `
    onInit(): void {
        // hljs.highlightAll();
    }
    getMarkdown() {
    }
}
