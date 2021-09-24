![Single Page Application Framworks](assets/banner.png)
[![npm version](https://img.shields.io/badge/npm-v1.0.51-blue)](https://www.npmjs.com/package/simple-boot-front) [![license](https://img.shields.io/badge/license-MIT-green)](LICENSE.md) [![Chat](https://img.shields.io/badge/discord-20%20online-brightgreen?logo=discord)](https://discord.gg/PW56dpns) [![Github](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/visualkhh/simple-boot-front)

Single Page Application Framworks for Web

# [😎 demo page link](https://codesandbox.io/s/example-simple-boot-front-spb5d)


## Our primary goals are
* Provide a radically faster and widely accessible getting started experience for all front end.

## 🚀 Quick start cli
  ```shell
  npm init simple-boot-front projectname
  cd projectname
  npm run serve
  ```

- Installation and Getting Started
```
npm install simple-boot-front
```




## [😃 examples project](./examples)
* #### [parcel-bundler](./examples/parcel-bundler)
* #### [parcel-bundler-js](./examples/parcel-bundler-js) (js version)
* #### [webpack](./examples/parcel-bundler)

  
* Here is a quick teaser of a complete simple-boot-front application in typescript
  * index.ts
    ```typescript
    const option = new SimFrontOption(window, [Advice]).setUrlType(UrlType.path);
    const simpleApplication = new SimpleBootFront(AppRouter, option);
    simpleApplication.run(); 
    ```
    
  * index.html
    ```html
    <!doctype html>
    <html>
     <head>...</head>
     <body id="app"></body>
    </html>
    ```
  * AppRouter.ts
    ```typescript
     @Sim({scheme: 'layout-router'})
     @Component({template, styles: [css]})
     @Router({
     path: '',
     childs: {
     '': Index,
     '/': Index,
     '/user': User
     }
     })
     export class AppRouter implements RouterAction, FrontLifeCycle {
     name = 'AppRouter'
     data = {name: 'good'}
     child?: any
     
         constructor(private navigation: Navigation, private simOption: SimFrontOption) {
         }
     
         canActivate(url: Intent, module: any) {
             console.log('canActivate  router--->', url, module)
             this.child = module;
         }
     
         onReady(data: HTMLFrameElement): void {
         }
     
         onRenderd(data: HTMLFrameElement): void {
         }
     
         onChangedRender(): void {
         }
     
         onCreate(): void {
         }
     
         onFinish(): void {
         }
     
         onInit(): void {
         }
     
         onInitedChild(): void {
         }
     }

    ```
  * index.ts
    ```typescript
    @Sim({scheme: 'index'})
    Component({
      template,
      styles: [css]
    })
    export class Index {
      public user?: User;
      public data = {name: 'visualkhh'}
      onInit() {
      console.log('-->')
      }
      
      @PostConstruct
      public g(s: User) {
      
      }
    }


    ```
  * index.html
    ```html
    <h1>index</h1>
    ${this.data.name}
    <button dr-event-click="this.data.name='vvv'"> change name </button>
    ```

## View template engine (dom-render)
 - https://github.com/visualkhh/dom-render
 - ### It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.
 - ### Update view only for parts where the value has changed.

## Module LifeCycle
* onCreate(): Sim onCreate just one call
* onInit(): module load event
* onChangedRender(): change rended in module event
* onInitedChild(): module and child module inited event
* onFinish(): lifecycle finish event

# Decorator
* @Sim(): Objects managed by the SimpleBootFront framework
  - parameter: SimConfig  {schema: string}
  ```typescript
  @Sim({scheme: 'index'})
  @Component({
  template,
  styles: [css]
  })
  export class Index {  }
  ```
* @PostConstruct(): Methods that you run for a separate initialization operation after the object is created
  ```typescript
  @PostConstruct
  post(projectService: ProjectService) {
      console.log('post Construct  and dependency injection')
  }
  ```
* @Injectable: No Sim Decorator Class Inject Sim 
  ```typescript
  @Injectable()
  export class CTitle extends Title {
  constructor(public testService: TestService) {
    console.log('ctitle constructor-->', this.testService)
  }
  
      cc() {
          this.value = this.testService.tail(Math.floor(RandomUtils.random(1, 50)), '---');
      }
      @PostConstruct
      ttt(testService: TestService) {
          console.log('poo->', testService)
      }
  }

  ```
* @After, @Before
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

* @ExceptionHandler
  ```typescript
  @ExceptionHandler()
  public exception0(e: any) {
      console.log('Advice Global exception:', e)
  }
  ```

## Intent event broker 
```typescript
click() {
  intentManager.publish(new Intent('layout://info/data?a=wow&aa=zzz', Math.floor(RandomUtils.random(0, 100))));
  // this.publish(new Intent('layout://info/datas', Math.floor(RandomUtils.random(0, 100))));
  // this.publish(new Intent('layout://', Math.floor(RandomUtils.random(0, 100)))); // default callback method -> subscribe(i: Intent)
  // this.publish(new Intent('://info/datas', Math.floor(RandomUtils.random(0, 100))));
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
## Reserved key word
 * html
   - attribute
     - **[router-outlet]**: child module space
     - **module-event-click**: click event
       - value: method name, parameter($event, View)
     ```html
     <button dr-event-click="changeData">change</button>
     ```
     - **module-event-change**: change event
       - value: method name, parameter($event, View)
     ```html
     <input dr-event-change="changeData">
     ```
     - **module-event-keyup**: keyup event
       - value: method name, parameter($event, View)
     ```html
     <input dr-event-keyup="changeData">
     ```
     - **module-event-keydown**: keydown event
       - value: method name, parameter($event, View)
     ```html
     <input dr-event-keydown="changeData">
     ```
     - **module-event-input**: input event
       - value: method name, parameter($event, View)
     ```html
     <input dr-event-input="changeData">
     ```
     - **module-value-link**: link event (value change <-> input)
       - value: variable name
     ```html
     <input dr-value-link="value">
     ```
     - **module-value**: value injection
       - value: variable name
     ```html
     <input dr-value="value">
     ```
     - **module-change-attr**: change value setAttribute
       - value: script
     ```html
     <img src="https://cdn.imweb.me/thumbnail/20190912/460132b4e4fce.jpg" module-change-attr="return {height: this.size, width: this.size}">
     ```
     - **module-change-style**: change value set Style
       - value: script
     ```html
     <div module-change-style="return {fontSize: `${this.size}px`, color: this.randomColor()}">hello</div>
     ```
     - **router-active-class**: url === href attribute => class add 
       - value: add and remove class name
     ```html
     <a router-link="ajax" router-active-class="['active']">Ajax</a>
     ```
     - **router-link**:
       - value: router link
     ```html
     <a router-link="ajax">Ajax</a>
     ```
     - subscribe
     ```typescript
     data(i: Intent) {
      this.datas = i.data + '->' + i.params.aa
     }
     viewSubscribe(i: Intent<View<HTMLInputElement>>) {
       this.datas = i.data?.value + '->' + i.params.aa + '-->' + i.event
     }
    ```


## License
* MIT
* visualkhh@gmail.com
