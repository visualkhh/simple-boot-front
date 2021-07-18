/* eslint-disable */
// import * as request from 'supertest'
import {of} from 'rxjs'
import {mergeMap} from 'rxjs/operators'

import * as ts from "typescript";
// typescript decorator
// https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
describe('typescript basic', () => {
    test('typescript basic test', async (done) => {
        const source = "let x: string  = 'string'";
        let result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS }});
        console.log(JSON.stringify(result));
        done()
    })



    test('typescript promise test', async (done) => {
        const a = async (s: string) => {
            console.log('---------')
            return '--------->';
        }

        a('aa').then(it => console.log(it));
        done()
    })

})


const data = {
    title: '과제명',
    scopes: [
        // {type: 'all', startDt: '2012-01-01', endDt: '2022-01-02'},
        {type: 'define', startDt: '2012-01-01', endDt: '2022-01-02'},
        {type: 'idea', startDt: '2012-01-01', endDt: '2022-01-02'},
        {type: 'test', startDt: '2012-01-01', endDt: '2022-01-02'},
    ],
    type: 'team',
    desc: 'desc'
}


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
