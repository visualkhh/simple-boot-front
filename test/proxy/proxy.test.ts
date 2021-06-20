/* eslint-disable */
// import * as request from 'supertest'
// import {Index} from '@src/app/features/index'

import {SimObjectProxyHandler} from "../../src/proxy/SimObjectProxyHandler";

describe('Proxy Test', () => {
    test('proxy test', async (done) => {

//
// var p = new Proxy(function() {}, {
//     apply: function(target, thisArg, argumentsList) {
//         console.log('호출됨: ' + argumentsList.join(', '));
//         return argumentsList[0] + argumentsList[1] + argumentsList[2];
//     }
// });
        const target = {
            a: 10,
            wow(a: string) {
                console.log('--->')
                return a + '----'
            }
        }
        target.wow = new Proxy(target.wow, {
            apply: function (target, thisArg, argumentsList) {
                console.log('호출됨: ' + argumentsList.join(', '));
                return 'ppppppproxy'
            }
        });
        var p = new Proxy(target, {
            set: function (obj: any, prop, value) {
                console.log('호3333333333333');
                obj[prop] = value
                return true;
            },
            apply: function (target, thisArg, argumentsList) {
                console.log('호출됨: ' + argumentsList.join(', '));
                return 'ppppppproxy'
            }
        });


        p.a = 555;
        console.log(p.wow('zzzzzzzzzz'))
        console.log(target.wow('11'))
// const simProxyHandler = new SimProxyHandler(simpleApplication.simstanceManager.getOrNewSim(Renderer)!);
// var p = new Proxy(pp, simProxyHandler);
//
// console.log(p.wow('1, 2, 3')); // "호출됨: 1, 2, 3"
        // 6

        expect(200).toBe(200)
        done()
    })


    test('proxy test2', async (done) => {
        const name = 'name';
        const nameS = new Proxy(name as Object, {
            apply: function (target, thisArg, argumentsList) {
                console.log('호출됨: ' + argumentsList.join(', '));
                return 'ppppppproxy'
            }
        });



        nameS.toString();
        done()
    })


    test('map proxy test', async (done) => {
       let names = new Map<string, string>()
        console.log((names instanceof Map))

        names.set('z', 'zvaava')
        names = new Proxy(names, {});
        console.log(names.get('z'));




        done()
    })
})

