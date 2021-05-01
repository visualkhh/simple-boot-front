simple-boot-front  [v1.0.18]
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
    new SimpleApplication({selector: 'app', urlType: UrlType.path}).run(AppRouter)
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
    @Sim()
    export class AppRouter extends Router {
    module = App
    '' = Index
    'hello-world' = HelloWord
    }
    ```
  * index.ts
    ```typescript
    @Sim()
    export class Index extends Module {
    template = html;
    data = 'default data'
    styleImports = [css]
    
        public title = new class extends Module {
            public data = '';
        }()
    
        public numbers = new class extends Module {
            public datas = [1, 2, 3];
            template = '<ul>{{#each datas as |data i|}}<li>{{data}}</li>{{/each}}</ul>'
        }()
    
        constructor(public v: ViewService) {
            super('index')
        }
        
        test() {
            console.log('test')
        }
    
        changeText($event: KeyboardEvent, view: View<Element>) {
            this.title.data = view.value;
        }
    
        changeData() {
            this.numbers.datas = [Math.floor(RandomUtils.random(1, 400)), Math.floor(RandomUtils.random(1, 400)), Math.floor(RandomUtils.random(1, 400))];
        }
    }
    ```
  * index.html  (handlebars)
    ```html
    <h1>index</h1>
    <ul>
        <li><a href="/#hello-world">hello</a></li>
    </ul>
    <div>
        <div>
            {{{title}}}
        </div>
        <div>
            title: <input type="text" module-event-keyup="changeText">
        </div>
    </div>
    <br>
    <img width="100" src="../../../assets/img.jpg">
    
    <div>
        {{{numbers}}}
        <button class="btn btn-info" module-event-click="changeData">change</button>
    </div>
    
    <div>
        <input type="text" module-value="data">
    </div>
    
    
    <div>
        <div module-isolate="data">
            {{data}}
            <button class="btn btn-info" module-event-click="test">test</button>
        </div>
        <input type="text" module-link="data">
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
* @PostConstruct(): Methods that you run for a separate initialization operation after the object is created

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
    template = '<div><h3>info</h3>{{datas}}</div>';
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
         <div module-isolate="data">{{data}}</div>
         ```
     - **router-active-class**: url === href attribute => class add 
       - value: add and remove class name
       - ```html
          <a href="#ajax" router-active-class="['active']">Ajax</a>
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
