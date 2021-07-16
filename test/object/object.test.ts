/* eslint-disable */
// import * as request from 'supertest'
// import css from "./app.css"


import {FrontModule} from '../../src/module/FrontModule';
import {ObjectUtils} from "simple-boot-core/utils/object/ObjectUtils";

export class Test extends FrontModule {

}

describe('object-test', () => {

    test('object', async (done) => {
        console.log(new Test() instanceof FrontModule)

        console.log(ObjectUtils.isPrototypeOfTarget(FrontModule, new Test()))
        done()
    })

    test('prototype test', async (done) => {
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
