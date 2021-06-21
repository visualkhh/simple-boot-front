/* eslint-disable */
// import * as request from 'supertest'
// import css from "./app.css"


import {Module} from "../../src/module/Module";
import {Renderer} from "../../src/render/Renderer";
import {ReflectUtils} from "../../src/util/reflect/ReflectUtils";

export class ZTitle extends Module {

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
