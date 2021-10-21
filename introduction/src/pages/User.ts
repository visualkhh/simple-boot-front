import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim()
@Component({
    template: '<div>user<pre><code class="typescript">const a = 10;</code></pre></div>'
})
export class User {

}

