![Single Page Application Framworks](assets/banner.png)
[![npm version](https://img.shields.io/badge/npm-v1.0.81-blue)](https://www.npmjs.com/package/simple-boot-front) [![license](https://img.shields.io/badge/license-MIT-green)](LICENSE.md) [![Chat](https://img.shields.io/badge/discord-20%20online-brightgreen?logo=discord)](https://discord.gg/PW56dpns) [![Github](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/visualkhh/simple-boot-front)

# Our primary goals are
- Single Page Application Framworks for Web
-  Provide a radically faster and widely accessible getting started experience for all front end.

--- 
# 🚀 Quick start cli
```shell
npm init simple-boot-front projectname
cd projectname
npm start
```


- Installation and Getting Started
```
npm install simple-boot-front
```
---

# 😃 examples
- [examples project](./examples)
- [templates](./templates)
--- 

# 📄 Code description
## start
```html
<!DOCTYPE html><html lang="en"><body id="app"></body></html>
```
```typescript
const option = new SimFrontOption(window).setUrlType(UrlType.hash);
const simpleApplication = new SimpleBootFront(Index, option);
simpleApplication.run();
```

## @Sim
Objects managed by the SimpleBootFront framework
- parameter: SimConfig  {schema: string}
```typescript
@Sim({scheme: 'index'})
```

## @Component
```typescript
@Sim()
@Component({
    template,
    styles: [style]
})
export class Index {
}
```

## @Router
```typescript
@Sim()
@Router({
    path: '',
    route: {
        '/': Home,
        '/user': User,
        '/user/:id': UserDetaile
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



## @Script
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


## @PostConstruct
Methods that you run for a separate initialization operation after the object is created
```typescript
@PostConstruct
post(projectService: ProjectService) {
    console.log('post Construct  and dependency injection')
}
```

## @After, @Before (AOP)
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

## @ExceptionHandler
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

----

# View template engine (dom-render)
- **DomRender** [![npm version](https://img.shields.io/badge/npm-blue)](https://www.npmjs.com/package/dom-render) [![Github](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/visualkhh/dom-render)
- It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.
- Update view only for parts where the value has changed.

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

# Intent event broker 
```typescript
constructor(intentManager: IntentManager){...}
// call
queryParamCall() {
  this.intentManager.publish(new Intent('layout://info/data?a=wow&aa=zzz', Math.floor(RandomUtils.random(0, 100))));
}
call() {
  this.intentManager(new Intent('layout://info/datas', Math.floor(RandomUtils.random(0, 100))));
}
targetCall() {
  this.intentManager(new Intent('layout://', Math.floor(RandomUtils.random(0, 100))));
  // default callback method -> subscribe(i: Intent)
}
globalCall() {
  this.intentManager(new Intent('://info/datas', Math.floor(RandomUtils.random(0, 100))));
}
windowEventCall() {
  const data = new CustomEvent('intent', {detail: {uri: 'index://showStore', data: {id: 'id data'}}});
  window.dispatchEvent(data);
}

// receive
showStore(i: Intent) {
  this.datas = i.data + '->' + i.params.aa
}
```

```typescript
@Sim({scheme: 'layout'})
@Component({
  template,
  styles: [css]
})
export class App {
    info = new AppInfo();
    constructor() {}
}
```
```typescript
export class AppInfo {
    datas = 'default data';
    data(i: Intent) {
        this.datas = i.data + '->' + i.params.aa
    }
}
```
----
# License
* MIT
* visualkhh@gmail.com
