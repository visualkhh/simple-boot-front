/* eslint-disable */
// import * as request from 'supertest'
// import {Index} from '@src/app/features/index'

import {SimNoSuch} from "../src/throwable/NoSuchSim";
import {SimError} from "../src/throwable/SimError";

describe('Test', () => {
    test('prototype javascript test', async (done) => {
        function Fee() {
            // ...
        }

        function Fi() {
            // ...
        }
        // @ts-ignore
        Fi.prototype = new Fee();

        function Fo() {
            // ...
        }
        // @ts-ignore
        Fo.prototype = new Fi();

        function Fum() {
            // ...
        }
        // @ts-ignore
        Fum.prototype = new Fo();

        // @ts-ignore
        var fum = new Fum();
        if (Fi.isPrototypeOf(fum)) {
           console.log('--')
        }
        done()
    })

    test('prototype test', async (done) => {
        class A {
            public a() {}
        }

        class B extends A {
            public b() {}
        }

        class C extends B {
            public c() {}
        }
        class D extends C {
            public c() {}
        }


        // const a = NoSuchSim.prototype;
        // console.log(Object.prototype.isPrototypeOf.call(a, new NoSuchSim()));
        // console.log(Object.prototype.isPrototypeOf.call(a, new SimError()));
        //
        // const a = Object.getPrototypeOf(new A());
        // const aa = A.prototype;
        // console.log(a, aa);
        // console.log(Object.prototype.isPrototypeOf.call(a, new A()));
        // const b = A.prototype.isPrototypeOf(new C());
        // console.log(b)


        //
        // const bc = Object.prototype.isPrototypeOf.call(C.prototype, new C());
        // console.log(bc)

        // class SimError1 implements Error {
        //     message: string;
        //     name: string;
        //
        //     constructor(message: string = 'error message', name: string = 'error name') {
        //         this.message = message;
        //         this.name = name;
        //     }
        // }
        // class NoSuchSim1 extends SimError1 {
        // }
        // //
        // // const bcc = Object.prototype.isPrototypeOf.call(SimError1.prototype, new NoSuchSim1());
        // // console.log(bcc)
        // const bcc = Object.prototype.isPrototypeOf.call(Error.prototype, new NoSuchSim1());
        // console.log(bcc)

        // const prototypeOf = Object.getPrototypeOf(SimError1);
        // const prototypeOf2 = Error.prototype;
        // console.log(prototypeOf, prototypeOf2)
        // console.log(prototypeOf === prototypeOf2)
        //





        expect(200).toBe(200)
        done()
    })
})

