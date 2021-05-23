simple-boot-front  [v1.0.22]
===========

Single Page Application Framworks


## Our primary goals are
* Provide a radically faster and widely accessible getting started experience for all front end.

## Function
* Hot apply!
* Auto injection
* Partial reloading

## [😎 demo page link](https://codesandbox.io/s/example-simple-boot-front-spb5d)

## Installation and Getting Started
The reference documentation includes detailed installation instructions as well as a comprehensive getting started guide.

```
npm install simple-boot-front
```


### [examples project](./examples)
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
    export class AppRouter extends Router {
      module = App;
      '' = Index;
      'ajax' = Ajax;
      'intent' = Intents;
      'view' = Views;
      'exception' = Exception;
      'aop' = Aop;
      'views' = Views;
    }
    ```
  * index.ts
    ```typescript
    @Sim({scheme: 'index'})
    export class Index extends Module {
      template = html;
      data = "default data";
      thisData = 5151;
      constructor(public v: ViewService, public manager: SimstanceManager, public navigation: Navigation) {
          super("index");
      }
  
      onInit() {
      }

      @PostConstruct
      public post(renderer: Renderer) {
      }
    }

    ```
  * index.html  (handlebars)
    ```html
    <h1>index</h1>
    links:
    <ul>
        <li>ajax example page: <a router-link="">ajax</a></li>
    </ul>
    
    <div class="card mt-2" style="width: 100%;">
        <div class="card-body">
            <h5 class="card-title">set module</h5>
            <div>set variable: {%write(this.title)%}</div>
            <div>input module variable: <input type="text" module-event-keyup="changeText"></div>
        </div>
    </div>
    
    <div class="card mt-2" style="width: 100%;">
        <div class="card-body">
            <h5>event click change "module-event-click"</h5>
            {%write(this.numbers)%}
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
            <h5>variable isolate "module-isolate"</h5>
            <div module-isolate="data">
                {%write(this.data)%}
            </div>
            data link change event <input type="text" module-link="data">
        </div>
    </div>
    
    <div>
          {%write(this.thisData)%}
        thisData <button module-event-click="thisDataChange"> this data change</button>
    </div>
    <div>
        <div module-event-click="goto">aaaaaaaaa</div>
    </div>
    ```

## View template engine
```html
<div>{%write(this.data)%}</div>
<div>
{%
    for (let i of this.datas) {
        write('<li>' + i + '</li>');
    }
%}
</div>
```
- write: write string

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
  this.publish(new Intent('layout://info/data?a=wow&aa=zzz', Math.floor(RandomUtils.random(0, 100))));
  // this.publish(new Intent('layout://info/datas', Math.floor(RandomUtils.random(0, 100))));
  // this.publish(new Intent('layout://', Math.floor(RandomUtils.random(0, 100)))); // default callback method -> subscribe(i: Intent)
  // this.publish(new Intent('://info/datas', Math.floor(RandomUtils.random(0, 100))));
}
```

```typescript
@Sim({scheme: 'layout'})
export class App extends Module {
    styleImports = [css];
    template = html;
    info = new AppInfo();
    constructor() {
        super("app-layout-module");
    }
}
```
```typescript
export class AppInfo extends Module {
    template = '<div><h3>info</h3>{%write(this.datas)%}</div>';
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
       - ```html
         <button module-event-click="changeData">change</button>
         ```
     - **module-event-change**: change event
       - value: method name, parameter($event, View)
       - ```html
         <input module-event-change="changeData">
         ```
     - **module-event-keyup**: keyup event
       - value: method name, parameter($event, View)
       - ```html
         <input module-event-keyup="changeData">
         ```
     - **module-event-keydown**: keydown event
       - value: method name, parameter($event, View)
       - ```html
         <input module-event-keydown="changeData">
         ```
     - **module-event-link**: link event (value change <-> input)
       - value: variable name
       - ```html
         <input module-event-link="value">
         ```
     - **module-value**: value injection
       - value: variable name
       - ```html
         <input module-event-value="value">
         ```
     - **module-isolate**: Partial reloading scope 
       - value: target variable name
       - ```html
         <div module-isolate="data">{%write(this.data)%}</div>
         ```
     - **router-active-class**: url === href attribute => class add 
       - value: add and remove class name
       - ```html
          <a router-link="ajax" router-active-class="['active']">Ajax</a>
         ```
     - **router-link**:
       - value: router link
       - ```html
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
    - **/\*[module-selector]\*/**: module Dedicated style
      - as-is
        -  ```css
           /*[module-selector]*/ h1 {color: burlywood;}
           ```  
      - to-be
        -  ```css
           {{module-selector}} h1 { color: burlywood;}
           ```  

## License
* MIT
* visualkhh@gmail.com
