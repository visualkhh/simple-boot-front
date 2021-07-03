/* eslint-disable */
// import * as request from 'supertest'
// import {Index} from '@src/app/features/index'

import {ObjectUtils} from "../src/util/object/ObjectUtils";
import {FrontModule} from "../src/module/Module";
import {Router} from "../src/router/Router";

describe('Test', () => {
    test('proxy test', async (done) => {
        class aa  {
            constructor() {
            }
            aGood () {

            }
        }
        class wow extends aa{
            constructor() {
                super();
            }
            zz() {

            }
            tt() {}
        }
        class oh extends wow{
            constructor() {
                super();
            }
            zz() {

            }
            tt() {}
        }
        const allProtoType = ObjectUtils.getAllProtoType(oh);
        // const allProtoType = ObjectUtils.getPrototypeOf(oh);
        const allProtoTypes = ObjectUtils.getAllProtoType(Object.getPrototypeOf(new oh()));
        console.log(allProtoType)
        console.log(allProtoTypes)
        // const allProtoTypeName = ObjectUtils.getAllProtoTypeName(new wow());
        // console.log(allProtoTypeName)
        // const assignableFrom = ObjectUtils.isAssignableFrom(Object, wow);
        // console.log('-->', assignableFrom)
        expect(200).toBe(200)
        done()
    })
})

