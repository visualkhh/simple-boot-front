/* eslint-disable */
// import * as request from 'supertest'
import {of} from 'rxjs'
import {mergeMap} from 'rxjs/operators'
import {ObjectUtils} from "../src/util/object/ObjectUtils";

// typescript decorator
// https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
describe('Decorator', () => {
    test('decorator test', async (done) => {
        function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
            return class extends constructor {
                reportingURL = "http://www...";
            };
        }

        @reportableClassDecorator
        class BugReport {
            type = "report";
            title: string;

            constructor(t: string) {
                this.title = t;
            }
        }

        const bug = new BugReport("Needs dark mode");
        console.log(bug.title); // Prints "Needs dark mode"
        console.log(bug.type); // Prints "report"

// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system:
        console.log((bug as any).reportingURL);

        expect(200).toBe(200)
        done()
    });

    test('class decorator test', async (done) => {
        // function sealed(constructor: Function) {
        //     console.log('---->')
        //     Object.seal(constructor);
        //     Object.seal(constructor.prototype);
        // }
        const sealed = (constructor: Function) => {
            console.log('---->')
            Object.seal(constructor);
            Object.seal(constructor.prototype);
        }

        @sealed
        class BugReport {
            type = "report";
            title: string;

            constructor(t: string) {
                this.title = t;
            }

            public wow() {

            }
        }

        const bugReport = new BugReport('5');
        console.log(bugReport.type, bugReport.title, Object.getPrototypeOf(bugReport))
        console.log(ObjectUtils.getAllProtoTypeName(bugReport))
        done()
    })

    test('method decorator test', async (done) => {

        function enumerable(value: boolean) {
            return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
                descriptor.enumerable = value;
            };
        }

        function ttt(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log('ttttttttt', target, propertyKey, descriptor)
        }

        class Greeter {
            greeting: string;

            constructor(message: string) {
                this.greeting = message;
            }

            @ttt
            greet() {
                return "Hello, " + this.greeting;
            }
        }

        console.log(new Greeter('3').greet());
        done()
    })

})


// test('did not rain', () => {
//     const index = new Index()
//     console.log(index)
//     expect(0).toBe(0)
// })

// import { expect } from 'chai';
//
// console.log('--->')
// // eslint-disable-next-line no-undef
// describe('Calculator', () => {
//     // eslint-disable-next-line no-undef
//     it('should return sum of two number.', () => {
//         console.log('--->')
//         expect(20).to.equal(20);
//     });
// });
// // eslint-disable-next-line no-undef
