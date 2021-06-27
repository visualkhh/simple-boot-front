[![Single Page Application Framworks](assets/banner.png)](https://svelte.dev)
[![npm version](https://img.shields.io/badge/npm-v1.0.40-blue)](https://www.npmjs.com/package/simple-boot-front) [![license](https://img.shields.io/badge/license-MIT-green)](LICENSE.md) [![Chat](https://img.shields.io/badge/discord-20%20online-brightgreen?logo=discord)](https://discord.gg/PW56dpns) [![Github](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/visualkhh/simple-boot-front)

Single Page Application Framworks for Web

# [😎 demo page link](https://codesandbox.io/s/example-simple-boot-front-spb5d)


## Our primary goals are
* Provide a radically faster and widely accessible getting started experience for all front end.

## 🚀 Quick start cli
  - npm init simple-boot-front projectname
  - cd projectname
  - npm run serve




## [😃 examples project](./examples)
* #### [parcel-bundler](./examples/parcel-bundler)
* #### [parcel-bundler-js](./examples/parcel-bundler-js) (js version)
* #### [webpack](./examples/parcel-bundler)

  
* Here is a quick teaser of a complete simple-boot-front application in typescript
  * index.ts
    ```typescript
    const option = new SimOption(AppRouter)
    .setUrlType(UrlType.path)
    .setAdvice(Advice);
    const simpleApplication = new SimpleApplication(option);
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
    export class AppRouter extends RootRouter {
      '' = Index;
      'ajax' = Ajax;
      'intent' = Intents;
      'view' = Views;
      'exception' = Exception;
      'aop' = Aop;
      'views' = Views;
    
        constructor() {
            super(App);
        }
    
        async canActivate(url: Url, module: RouterModule): Promise<RouterModule | ConstructorType<Module>>{
            if (url.path === 'views' && url.params.get('auth') === 'false') {
                return Forbidden;
            } else {
                return module;
            }
        }
    
        notFound(url: Url): ConstructorType<Module> {
            console.log(url.path)
            return Notfound;
        }
    }


    ```
  * index.ts
    ```typescript
    @Sim({scheme: 'index'})
    export class Index extends Module {
      data = "default data";
      thisData = 5151;
      constructor(public v: ViewService, public manager: SimstanceManager, public navigation: Navigation) {
          super({template: html});
      }
  
      onInit() {
      }

      @PostConstruct
      public post(renderer: Renderer) {
      }
    }

    ```
  * index.html
    ```html
    <h1>index</h1>
    links:
    <ul>
        <li>ajax example page: <a router-link="/ajax">ajax</a></li>
    </ul>
    
    <div class="card mt-2" style="width: 100%;">
        <div class="card-body">
            <h5 class="card-title">set module</h5>
            <div>set variable: <!--%write(this.title)%--></div>
            <div>input module variable: <input type="text" module-event-keyup="changeText"></div>
        </div>
    </div>
    
    <div class="card mt-2" style="width: 100%;">
        <div class="card-body">
            <h5>event click change "module-event-click"</h5>
            <!--%module(this.numbers)%-->
            <button class="btn btn-info" module-event-click="changeData">change</button>
        </div>
    </div>
    
    <div class="card mt-2" style="width: 100%;">
        <div class="card-body">
            <h5>default data set "module-value"</h5>
            <input type="text" module-value="data">
        </div>
    </div>
    
    <div class="card mt-2" style="width: 100%;">
        <div class="card-body">
            <h5>variable module</h5>
              <!--%module(this.data)%-->
            data link change event <input type="text" module-value-link="data">
        </div>
    </div>
    
    <div>
          <!--%write(this.thisData)%-->
        thisData <button module-event-click="thisDataChange"> this data change</button>
    </div>
    <div>
        <div module-event-click="goto">aaaaaaaaa</div>
    </div>
    ```

## View template engine
 - ### It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.
 - ### Update view only for parts where the value has changed.
 - scope
   - start: <!--% 
   - end: %-->
   - write: write string
   - method  
     - module: module include 
   - ex
      ```html
      <div><!--%write(this.data)%--></div>
      <div><!--%module(this.aModule)%--></div>
      <div>
      <!--%
          for (let i of this.datas) {
              write('<li>' + i + '</li>');
          }
      %-->
      </div>
      <div>
          <!--%
          for(var i = 0 ; i < this.count ; i ++) {
              write("<img src='https://cdn.imweb.me/thumbnail/20190912/460132b4e4fce.jpg' module-change-attr=\"return {height: this.size, width: this.size}\">");
          }
          %-->
      </div>
      ```

## Module LifeCycle
* onInit(): module load event
* onChangedRender(): change rended in module event
* onInitedChild(): module and child module inited event
* onFinish(): lifecycle finish event

# Decorator
* @Sim(): Objects managed by the SimpleBootFront framework
  - parameter: SimConfig  {schema: string}
  ```typescript
  @Sim({scheme: 'index'})
  export class Index extends Module {  }
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
    super({
      template: 'value:(<!--% write(this.value) %--> <button module-event-click="cc">CC</button>)',
      value: 'default value'
    });
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
* @EventListener
  ```typescript
    @EventListener({target: window, name: 'resize'})
    callBackResize($event: Event, view: View<any>) {
        console.log('----resize-----', view, $event)
    }

    @EventListener({target: '#zzz', name: 'input'})
    callBackInput($event: Event, view: View<any>) {
        console.log('----input-----', view, $event)
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
  this.publish(new Intent('layout://info/data?a=wow&aa=zzz', Math.floor(RandomUtils.random(0, 100))));
  // this.publish(new Intent('layout://info/datas', Math.floor(RandomUtils.random(0, 100))));
  // this.publish(new Intent('layout://', Math.floor(RandomUtils.random(0, 100)))); // default callback method -> subscribe(i: Intent)
  // this.publish(new Intent('://info/datas', Math.floor(RandomUtils.random(0, 100))));
}
```

```typescript
@Sim({scheme: 'layout'})
export class App extends Module {
    info = new AppInfo();
    constructor() {
        super({template: html, styleImports:[css]});
    }
}
```
```typescript
export class AppInfo extends Module {
    datas = 'default data';
    constructor() {
      super({template: '<div><h3>info</h3><!--%write(this.datas)%--></div>'});
    }
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
     <button module-event-click="changeData">change</button>
     ```
     - **module-event-change**: change event
       - value: method name, parameter($event, View)
     ```html
     <input module-event-change="changeData">
     ```
     - **module-event-keyup**: keyup event
       - value: method name, parameter($event, View)
     ```html
     <input module-event-keyup="changeData">
     ```
     - **module-event-keydown**: keydown event
       - value: method name, parameter($event, View)
     ```html
     <input module-event-keydown="changeData">
     ```
     - **module-event-input**: input event
       - value: method name, parameter($event, View)
     ```html
     <input module-event-input="changeData">
     ```
     - **module-value-link**: link event (value change <-> input)
       - value: variable name
     ```html
     <input module-value-link="value">
     ```
     - **module-value**: value injection
       - value: variable name
     ```html
     <input module-value="value">
     ```
     - **module-change-attr**: change value setAttribute
       - script
         - it: detect variable value
         - attribute: element attribute
     ```html
     <img src="https://cdn.imweb.me/thumbnail/20190912/460132b4e4fce.jpg" module-change-attr="return {height: it, width: it}">
     ```
     - **module-change-style**: change value set Style
       - script
         - it: detect variable value
         - style: element style
     ```html
     <div module-change-style="return {fontSize: `${it}px`, color: this.randomColor()}">hello</div>
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
     - **module-event-{{eventName}}-intent-publish**: intent publish 
       - value: ['uri', 'variablename'] or ['uri']
       - publish
     ```html
     click event intent publish:
     <button class="btn btn-primary" module-event-click-intent-publish="['layout://info/data?a=wow&aa=ppp','makeRandom']">publish data</button>
         
     typing:
     <input type="text" module-event-keyup-intent-publish="['layout://info/viewSubscribe?a=wow&aa=vvv']">
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
  * css
    - **moduleIdAttrSelector()**: module Dedicated style
      - as-is
        -  ```css
           <!--%moduleIdAttrSelector()%--> h1 {color: burlywood;}
           ```  
      - to-be
        -  ```css
           *[module-id='___Module___module-selector..'] h1 { color: burlywood;}
           ```  

## License
* MIT
* visualkhh@gmail.com
