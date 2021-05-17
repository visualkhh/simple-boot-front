/* eslint-disable */
// import * as request from 'supertest'
// import css from "./app.css"

import {Renderer} from "../../src/render/Renderer";
import {SimOption} from "../../src/option/SimOption";
import {ConstructorType} from "../../src/types/Types";
import {Router} from "../../src/router/Router";
import {ObjectUtils} from "../../src/util/object/ObjectUtils";
import {FunctionUtils} from "../../src/util/function/FunctionUtils";
// const ffa = -111;
var html = `
<div>
    {{{ aaa }}}
</div>
<div>
    {{{ ccc }}}
</div>
<div>
    {{{ ddd }}}
</div>
<div>
    {{{    aaa }}}
</div>
<div>
{%  this.ffa  %}
{%this.vv%}
{%
this.zz
%}
</div>
{%
    for (let i of ['a','b']) {
        this.return(i + '-<div>aaaa</div>--')
        {{<div>dd</div>}}
    } 
%}

{%
1+100
%}
<div>
    {{{ aaa }}}
</div>
<div>
    <module var="wow"></module>
    <module ref="WOW"></module>
    <module:wow ref="WOW"></module:wow>
</div>
`
// render
const render = new Renderer(new SimOption({} as ConstructorType<Router>))

describe('templates-engine', () => {

    test('{{{}}}', async (done) => {
        const datas = new Map<string, any>();
        const dataContain = {
            aaa: 1,
            ccc: 11,
            ddd: 12,
        } as any
        const origin = RegExp('\{\{\{\\s+(.+)\\s+\}\}\}', 'gm')
        let originExec = origin.exec(html);
        while (originExec) {
            console.log('--->', originExec)
            datas.set(originExec[1], dataContain[originExec[1]]);
            originExec = origin.exec(originExec.input)
        }
        // console.log()
        // originExec.forEach(it => {
        //     // console.log(origin.exec(it));
        //     const key = origin.exec(it)![1];
        //     const data = dataContain[key].toString();
        //     html = html.replace(it, data)
        // })
        datas.forEach((v, k, map) => {
            html = html.replace(RegExp('\{\{\{\\s+' + k + '\\s+\}\}\}', 'gm'), v)
        });
        // html.replace()
        console.log(datas)
        console.log(html)
        done()
    })

    test('iterator', async (done) => {
        const datas = new Map<string, any>();
        const dataContain = {
            aaa: [1, 5, 11, 12],
            ccc: 1001,
            ddd: 1111,
            ffa: 1011,
            vv: 1211,
            zz: 1311,
        } as any
        const origin = RegExp('{%\\s*([^%]*)\\s*%}', 'gm')
        // const origin = RegExp('\{\%((\\s|[^\%\}])*)\%\}', 'gm')
        let originExec = origin.exec(html);
        while (originExec) {
            // console.log('--->', originExec)
            datas.set(originExec[1], dataContain[originExec[1]]);
            originExec = origin.exec(originExec.input)
        }
        // console.log()
        // originExec.forEach(it => {
        //     // console.log(origin.exec(it));
        //     const key = origin.exec(it)![1];
        //     const data = dataContain[key].toString();
        //     html = html.replace(it, data)
        // })
        // datas.forEach((v, k, map) => {
        //     // console.log('k->', k)
        //     // (window as any )['ffa'] = 11;
        //     console.log('this--->', k)
        //     // @ts-ignore
        //     // const a = global.eval.call(dataContain, k)
        //     // const ab = eval.bind(dataContain)
        //     const n = Object.assign({return: (data) =>{ console.log('----return',data) }}, dataContain)
        //     // const a = n.eval('this.ffa += 1');
        //     const a = n.eval(k.trim());
        //     // const a = eval.call(dataContain, 'ffa + 1');
        //     // const a = eval.call(dataContain, k)
        //     console.log('-value->', a, n[k.trim()], dataContain[k.trim()]);
        //     // html = html.replace(RegExp('\{\{\{\\s+' + k + '\\s+\}\}\}', 'gm'), v)
        // });
        // html.replace()
        console.log(datas)
        // console.log(html)
        done()
    })

})
