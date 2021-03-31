/* eslint-disable */
// import * as request from 'supertest'
import {from, of} from 'rxjs'
import {map, mergeMap, tap} from 'rxjs/operators'
// import {Index} from '@src/app/features/index'

describe('Test', () => {
    test('rxjs test', async (done) => {
        // const response = await request(App.app).get('/');
        // map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`))

        of([1, 2, 3]).pipe(
            // tap(x => console.log(x))
            mergeMap(it => of([5,5]))
        ).subscribe(it => {
            console.log('xxx->', it)
        })
        // of(1, 2, 3).subscribe(it => {
        //     console.log(it)
        // })
        // of([1, 2, 3]).subscribe(it => {
        //     console.log(it)
        // })
        // from([1, 2, 3]).subscribe(it => {
        //     console.log(it)
        // })

        expect(200).toBe(200)
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
