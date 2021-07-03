/* eslint-disable */
// import * as request from 'supertest'
// import css from "./app.css"

import {Renderer} from "../../src/render/Renderer";
import {SimFrontOption} from "../../src/option/SimOption";
import {ConstructorType} from "../../src/types/Types";
import {Router} from "../../src/router/Router";
import {SimCompiler} from "../../src/render/compile/SimCompiler";
var html = `
<div>
    <!-- aaa -->
    <!--% write(this.ggg)%-->
    
    <!--% 
        write('zzz')
        for(let i of this.datas) {
            write('<div>'+i+'</div>');
        }
    %-->
    
    <!--%
    write('zzz')
    1
    %-->
    <img src="<!--%write('zzzzzzz')%-->">
    <!--%
    write(this.sub)
    %-->
    <div>
    
    <div>
        <module var="wow"></module>
        <module ref="WOW"></module>
    </div>
</div>
`
const dataContain = {
    aaa: 1,
    ccc: 11,
    ddd: 12,
    datas: ['aaa', 'bbb', 'cc'],
    ggg: 122,
    sub: '<!--% write(this.aaa) %-->',
} as any;
/*
function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $&는 일치한 전체 문자열을 의미합니다.
}
 */
const specialCharacterToEscape = (data: string) => {
    ['!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','\\','|'].forEach(it => {
        const s = '\\'+it;
        data = data.replace(RegExp(s, 'gm'), '\\'+it)
    })
    return data;
}
// render
// const render = new Renderer(new SimOption({} as ConstructorType<Router>))

describe('utils-test', () => {

    test('utils', async (done) => {
        // console.log(specialCharacterToEscape("!@#$%^&*()_{}"))
        console.log(specialCharacterToEscape("1+100"))
        done()
    })
})

describe('templates-engine', () => {

    test('innerhtml', async (done) => {
        const htmlDivElement1 = document.createElement('div');
        htmlDivElement1.innerHTML= 'zzzz';

        const fragment = document.createDocumentFragment()
        fragment.append(document.createTextNode('----'))
        fragment.append(htmlDivElement1)
        const htmlDivElement = document.createElement('template');
        // htmlDivElement.innerHTML = '<a> zzzzzz </a>'
        htmlDivElement.appendChild(fragment);
        console.log(htmlDivElement.content)
        done()
    })

    test('compile', async (done) => {
       const result = new SimCompiler(html, dataContain, {start: '<!--%', end: '%-->'}).run().root?.executeFragment();

        // for (let i = 0; i < result!.fragment.childNodes.length; i++) {
        //     const childNode = result!.fragment.childNodes[i];
        //     console.log('***-->', childNode)
        //     for (let y = 0; y < childNode.childNodes.length; y++) {
        //         console.log('******---->', childNode.childNodes[y])
        //     }
        // }
        const templateElement = document.createElement('div');
        templateElement.appendChild(result!.fragment);
        console.log(templateElement.innerHTML)
        done()
    })


    test('{{{}}}', async (done) => {
        const datas = new Map<string, any>();
        const dataContain = {
            aaa: 1,
            ccc: 11,
            ddd: 12,
        } as any// {%([\w\n\s]+)%}
        // (?<=\{\%)(.|\n|\s|[^\%\}])*(?=\%\})
        // const origin = RegExp('(\{\%)[\s\n]*(.+)[\s\n]*(\%\})', 'gm')
        const origin = RegExp('\{\%([a-zA-Z0-9\s\n!@#$%^&*()_+-=\[\]]*)\%\}', 'gm')
        let originExec = origin.exec(html);

        while (originExec) {
            //console.log('--->', originExec)
            datas.set(originExec[0], dataContain[originExec[2]]);
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
            // html = html.replace(RegExp('(\{\%)[\s\n]*' + specialCharacterToEscape(k) + '[\s\n]*(\%\})', 'gm'), '------')
            // const ss = '(\{\%)[\s\n]*' + specialCharacterToEscape(k) + '[\s\n]*(\%\})';
            // const s = '(\{\%)[\s\n]*1\\+100[\s\n]*(\%\})';
            // console.log('--->', specialCharacterToEscape(ss), '-->', specialCharacterToEscape(s))
            // html = html.replace(RegExp(s, 'gm'), '------')
            html = html.replace(k, v)
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
        datas.forEach((v, k, map) => {
            // console.log('k->', k)
            // (window as any )['ffa'] = 11;
            console.log('this--->', k)
            // @ts-ignore
            // const a = global.eval.call(dataContain, k)
            // const ab = eval.bind(dataContain)
            const n = Object.assign({eval: (data) =>eval(data), return: (data) =>{ console.log('----return',data) }}, dataContain)
            // const a = n.eval('this.ffa += 1');
            const a = n.eval(k.trim());
            // const a = eval.call(dataContain, 'ffa + 1');
            // const a = eval.call(dataContain, k)
            console.log('-value->', a, n[k.trim()], dataContain[k.trim()]);
            // html = html.replace(RegExp('\{\{\{\\s+' + k + '\\s+\}\}\}', 'gm'), v)
        });
        // html.replace()
        console.log(datas)
        // console.log(html)
        done()
    })

})
