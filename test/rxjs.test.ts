/* eslint-disable */
// import * as request from 'supertest'
import {of} from 'rxjs'
import {mergeMap} from 'rxjs/operators'

describe('Test', () => {
    test('rxjs test', async (done) => {
        // const response = await request(App.app).get('/');
        // map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`))

        of([1, 2, 3]).pipe(
            // tap(x => console.log(x))
            mergeMap(it => of([5, 5]))
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

