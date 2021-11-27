import * as JSDOM from 'jsdom';
console.log(JSDOM.JSDOM);
import { getComponent } from 'simple-boot-front/decorators/Component';
import { SimFrontOption, UrlType } from 'simple-boot-front/option/SimFrontOption';
import { UserServiceServer } from '../server/UserServiceServer';
const jsdom = new JSDOM.JSDOM('<!doctype html><html><body id="app">...</body></html>');
jsdom.reconfigure({
    url: 'http://localhost',
});
console.log('jsdom', jsdom.window.document)
// @ts-ignore
global.document = jsdom.window.document;
// @ts-ignore
global.window = jsdom.window;
global.Event = jsdom.window.Event;
global.NodeFilter = jsdom.window.NodeFilter;
global.Node = jsdom.window.Node;
global.HTMLElement = jsdom.window.HTMLElement;
global.Element = jsdom.window.Element;
console.log('--',document)

console.log('---',window.location.href, window.location.pathname)
//
// @ts-ignore
import ('./bootfactory').then(it => {
    it.factory(window, [UserServiceServer]).run()
    console.log('--??', document.documentElement.outerHTML)
})
// import { factory } from './index';
// factory(window).run();
//
// let simpleBootFront = new SimpleBootFront(AppRouter, new SimFrontOption(window).setUrlType(UrlType.path));
// simpleBootFront.run();
// // let component = getComponent(Index);
// // console.log('--', component)
// // setTimeout((() => {
// //     console.log('--??', document.documentElement.outerHTML)
// // }), 5000);






// @ts-ignore
// @ts-ignore
// import('simple-boot-front/SimpleBootFront').then(it => {
//     // console.log(html,'---22----', it.SimpleBootFront)
//     let simpleBootFront = new it.SimpleBootFront(AppRouter, new SimFrontOption(window).setUrlType(UrlType.path));
//     simpleBootFront.run();
//     let component = getComponent(Index);
//     console.log('--', component)
//     setTimeout((() => {
//         console.log('--??', document.documentElement.outerHTML)
//     }), 5000);
// })
// console.log('-------',  window.location.pathname);
// console.log(html,'-------', JSDOM.JSDOM);
// console.log(html,'-------', Event);


// const dom = new JSDOM.JSDOM(html);
// let querySelector = dom.window.document.querySelector("p")!;
// console.log(querySelector.textContent); // "Hello world"
