![Single Page Application Framworks](assets/banner.png)  
![typescript](https://img.shields.io/badge/-typescript-black?logo=typescript) [![npm](https://img.shields.io/badge/-npm-black?logo=npm)](https://www.npmjs.com/package/simple-boot-front) [![license](https://img.shields.io/badge/license-MIT-green)](LICENSE.md) [![Chat](https://img.shields.io/badge/discord-20%20online-brightgreen?logo=discord)](https://discord.gg/PW56dpns) [![Github](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/visualkhh/simple-boot-front)

**Our primary goals are**
* Single Page Application Framworks for Web
* Provide a radically faster and widely accessible getting started experience for all front end.

### dependencies
* dom-render [![npm](https://img.shields.io/badge/-npm-black?logo=npm)](https://www.npmjs.com/package/dom-render)
* simple-boot-core [![npm](https://img.shields.io/badge/-npm-black?logo=npm)](https://www.npmjs.com/package/simple-boot-core)


# [📄 introduction page 🔗](https://simple-boot-front.github.io)
- [https://simple-boot-front.github.io](https://simple-boot-front.github.io)


--- 
# 🚀 Quick start cli
```shell
npm init simple-boot-front projectname
cd projectname
npm start
# open browser: http://localhost:4500
```

# 😃 examples, templates
- [templates](./templates)
- [examples](./examples)

# directory structure
```
┌─ assets
├─ dist (out put directory)
├─ src (source)
│    ├─ pages (your pages)
│    │     ├ home.ts (sample page)
│    │     └ user.ts (sample page)
│    ├─ index.css (index route page css)
│    ├─ index.html (index route page template)
│    └─ index.ts (simple-boot-fornt start and route point)
├─ types (typescript type)
│    └ index.d.ts (type definition)
├─ index.html start (point html)
├─ package.json (project config)
├─ rollup.config.js (rollup bundler config)
└─ tsconfig.json (typescript config)
```

## source 
* simple-boot-front start and route point  (set: ts, html, css)
<details>
  <summary>pages/home.ts<strong>🔻(click)</strong></summary>

```typescript
@Sim
@Component({
    template: '<div>home</div>'
})
export class Home {

}
```
</details>
<details>
  <summary>pages/user.ts<strong>🔻(click)</strong></summary>

```typescript
@Sim
@Component({
  template: '<div>user</div>'
})
export class User {

}
```
</details>
<details>
  <summary>index.html<strong>🔻(click)</strong></summary>

```html
<header>
    <nav>
        <ul>
            <li>
                <button router-link="/">home</button>
            </li>
            <li>
                <button router-link="/user">user</button>
            </li>
        </ul>
    </nav>

</header>
<main>
    <router dr-this="this.child" dr-this:type="outlet" dr-strip="false"></router>
</main>
<footer>
    footer
</footer>
```
</details>

<details>
  <summary>index.css<strong>🔻(click)</strong></summary>

```css
header, footer, main {
    border: #333333 1px solid;
    padding: 20px;
    margin: 20px;
}
```
</details>

index.ts ▼
```typescript
import template from './index.html'
import style from './index.css'
@Sim
@Router({
  path: '',
  route: {
    '/': Home,
    '/user': User
  }
})
@Component({
  template,
  styles: [style]
})
export class Index implements RouterAction {
  child?: any;
  async canActivate(url: any, module: any) {
    this.child = module;
  }
}

const config = new SimFrontOption(window).setUrlType(UrlType.hash);
const simpleApplication = new SimpleBootFront(Index, config);
simpleApplication.run();
```

## Decorator
<details>
  <summary>@Sim<strong>🔻(click)</strong></summary>

Objects managed by the SimpleBootFront framework
- parameter: SimConfig  {schema: string}

```typescript
@Sim({scheme: 'index'})
```
</details>


<details>
  <summary>@Component<strong>🔻(click)</strong></summary>


```html
<!--template.html-->
<h1>${this.title}</h1>
<div>#innerHTML#</div>
```
```typescript
import template from './index.html'
import style from './index.css'
@Sim
@Component({
  selector: 'index', // default class name LowerCase
  template,
  styles: [style]
})
export class Index {
  public title = ''
  public setData(title: string) {
    this.title = title;
  }
}
```
### using
```typescript
constructor(index: Index){...}
```
```html
<index></index>
<!-- dr-set: $index.setData('data'); $element, $innerHTML, $attributes -->
<index dr-set="$index.setData('hello component')">
  <ul>
    <li>content</li>
  </ul>
</index>
```
</details>

<details>
  <summary>@Router<strong>🔻(click)</strong></summary>

```typescript
import template from './index.html'
import style from './index.css'
@Sim
@Router({
    path: '',
    route: {
        '/': Home,
        '/user': User,
        '/user/{id}': UserDetail
    }
})
@Component({
    template,
    styles: [style]
})
export class Index implements RouterAction {
    child?: any;
    canActivate(url: any, module: any): void {
        this.child = module;
    }
}
```

### activeRoute
```typescript
constructor(routerManager: RouterManager){
    // get path data
    routerManager.activeRouterModule.pathData.id; // /user/:id
}
```

### component include
```html
<route component="this.child"></route>
```


### router option
- attribute
  - **router-active-class**: url === href attribute => class add (a-classname, b-classname)
    - value: add and remove class name
  - **router-inactive-class**: url !== href attribute => class add  (a-classname, b-classname)
    - value: add and remove class name
  ```html
  <a router-link="/home" router-active-class="active" router-inactive-class="inactive">home</a>
  ```
  - **router-link**:
    - value: router link
    
</details>

<details>
  <summary>@Script<strong>🔻(click)</strong></summary>

```typescript
@Sim({scheme: 'i18nScript'})
@Script({
    name: 'i18n'
})
export class I18nScript extends ScriptRunnable {
    public language?: Language;
    constructor(public i18nService: I18nService) {
        super();
        i18nService.subject.subscribe(it => {
            this.language = it;
            this.render();  // <-- ref target  rerender
        })
    }
    run(key: string): any {
        return this.language?.defaultData?.[key] ?? key;
    }
}
```
### using script
```typescript
counstructor(i18nScript: I18nScript) {...}
counstructor(scriptService: ScriptService) {
  const i18nScript = scriptService.getScript('i18n');
}
```
```html
<div>${$scripts.i18n('Get Locale JSON')}</div>
<div dr-if="$scripts.i18n('Get Locale JSON') === 'wow'"> is wow</div>
```

</details>

<details>
  <summary>@PostConstruct<strong>🔻(click)</strong></summary>

Methods that you run for a separate initialization operation after the object is created

```typescript
@PostConstruct
post(projectService: ProjectService) {
    console.log('post Construct  and dependency injection')
}
```
</details>


<details>
  <summary>@After, @Before (AOP)<strong>🔻(click)</strong></summary>

```typescript
fire($event: MouseEvent, view: View<Element>) {
    console.log('fire method')
    this.data = RandomUtils.random(0, 100);
}

@Before({property: 'fire'})
before(obj: any, protoType: Function) {
    console.log('before', obj, protoType)
}

@After({property: 'fire'})
after(obj: any, protoType: Function) {
    console.log('after', obj, protoType)
}
```
</details>

<details>
  <summary>@ExceptionHandler<strong>🔻(click)</strong></summary>

```typescript
@ExceptionHandler(TypeError)
public exceptionTypeError(e: TypeError) {
  console.log('TypeError exception:')
}

@ExceptionHandler(SimError)
public exception1(e: SimError) {
  console.log('SimError exception:')
}

@ExceptionHandler(RouterError)
public exception3(e: RouterError) {
  console.log('NotFountRoute exception:')
}

@ExceptionHandler(SimNoSuch)
public exception2(e: SimNoSuch) {
  console.log('NoSuchSim exception:')
}
```
</details>


# Framework Core (simple-boot-core)  
[![npm version](https://img.shields.io/badge/-npm-black?logo=npm)](https://www.npmjs.com/package/simple-boot-core) [![Github](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/visualkhh/simple-boot-core) 
* Object management.
  * Dependency Injection (DI)
  * Life cycle provided.
* Aspect Oriented Programming (AOP)
* ExceptionHandler (Global or Local)
* Router System
* Intent Event System


# View template engine (dom-render)  
[![npm version](https://img.shields.io/badge/-npm-black?logo=npm)](https://www.npmjs.com/package/dom-render) [![Github](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/visualkhh/dom-render)
* view template engine
* Dom control and reorder and render
* all internal variables are managed by proxy. (DomRenderProxy)

----



# LifeCycle
## Module LifeCycle interface
* LifeCycle
  - onCreate(): Sim onCreate just one call
* OnChangedRender
  - onChangedRender(): change rended in module event
* OnFinish
  - onFinish(): lifecycle finish event
* OnInit
  - onInit(): module load event
* OnDestroy
  - onDestroy(): module destroy event
* OnInitedChild
  - onInitedChild(): module and child module inited event

----
# License
* MIT
* visualkhh@gmail.com
