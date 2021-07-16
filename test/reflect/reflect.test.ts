/* eslint-disable */
// import * as request from 'supertest'
// import css from "./app.css"


import {FrontModule} from "../../src/module/FrontModule";
import {Renderer} from "../../src/render/Renderer";
import {ReflectUtils} from "simple-boot-core/utils/reflect/ReflectUtils";

export class ZTitle extends FrontModule {

    constructor(render: Renderer) {
        super();
    }
}

describe('reflect-test', () => {

    test('reflect', async (done) => {
        const metadata = ReflectUtils.getMetadata("design:paramtypes", ZTitle);
        console.log(metadata)
        done()
    })
})
