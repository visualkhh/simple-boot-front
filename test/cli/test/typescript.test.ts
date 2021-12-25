/* eslint-disable */
// import * as request from 'supertest'
import {of} from 'rxjs'
import {mergeMap} from 'rxjs/operators'

import * as ts from "typescript";
// typescript decorator
// https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
describe('typescript', () => {
    test('typescript test', async (done) => {
        console.log('--->')
        done()
    })

    test('typescript test2', async (done) => {
        // let  it = 'var wow_1 = goodjob';
        let  it = 'var wow_1 = require("./app/features/wow");';
        const regExp = new RegExp('require\\("(.*)"\\);', 'gm');

        var arr = regExp.exec(it);
        // var arr = it.match(regExp);

        const s = it.replace(regExp, 'zz$1fffff');
        //console.log('-->', s)
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
