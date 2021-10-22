import {WOW, ZOZ} from 'src/app/features/wow';
import {G} from 'src/G';
import {SimpleApplication} from 'simple-boot-front/SimpleApplication';
// import html from 'tt.html'
const message: string = 'Hello World';
console.log(message); //, WOW
const w = new WOW('11');
const z = new ZOZ('1sss1');
console.log(w.print());
console.log(z.print());
console.log(new G('aaa').print());

const s = SimpleApplication;
console.log(s);
