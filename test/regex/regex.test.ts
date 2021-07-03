/* eslint-disable */
// import * as request from 'supertest'
// import css from "./app.css"

import {Renderer} from "../../src/render/Renderer";
import {SimFrontOption} from "../../src/option/SimOption";
import {ConstructorType} from "../../src/types/Types";
import {Router} from "../../src/router/Router";
import {SimCompiler} from "../../src/render/compile/SimCompiler";
const html = `
write(this.title.value2.wow.zzz);
`
// write(this.title.value0);write(this.title.value1);
//
// ㅁㄴㅇㅁㄴㅇㅁㄴ
// ㅁ
// write(this.title.value3);
//
// write(this.title.value4);
//
// ㅁㄴㅇㅁㄴㅇ
// ㅈㄷㅂㅈㄷ
//
// write(this.title.value5['jj']);
describe('regex-test', () => {

    test('regex', async (done) => {
        const datas = new Map<string, any>();
        const dataContain = {
            aaa: 1,
            ccc: 11,
            ddd: 12,
        } as any// {%([\w\n\s]+)%}
        // (?<=\{\%)(.|\n|\s|[^\%\}])*(?=\%\})
        // const origin = RegExp('(\{\%)[\s\n]*(.+)[\s\n]*(\%\})', 'gm')
        const origin = RegExp('this\\.([a-zA-Z_$][a-zA-Z.$0-9]*)', 'gm')
        let originExec = origin.exec(html);

        while (originExec) {
            const s = originExec[1].split('.')
            for (let i = 1; i <= s.length; i++) {
                const tail = s.slice(s.length - i, s.length - i + 1)
                const front = s.slice(0, s.length - i)
                console.log('--->', front, tail)

            }
            // datas.set(originExec[0], dataContain[originExec[2]]);
            originExec = origin.exec(originExec.input)
        }
        // // console.log()
        // // originExec.forEach(it => {
        // //     // console.log(origin.exec(it));
        // //     const key = origin.exec(it)![1];
        // //     const data = dataContain[key].toString();
        // //     html = html.replace(it, data)
        // // })
        // datas.forEach((v, k, map) => {
        //     // html = html.replace(RegExp('(\{\%)[\s\n]*' + specialCharacterToEscape(k) + '[\s\n]*(\%\})', 'gm'), '------')
        //     // const ss = '(\{\%)[\s\n]*' + specialCharacterToEscape(k) + '[\s\n]*(\%\})';
        //     // const s = '(\{\%)[\s\n]*1\\+100[\s\n]*(\%\})';
        //     // console.log('--->', specialCharacterToEscape(ss), '-->', specialCharacterToEscape(s))
        //     // html = html.replace(RegExp(s, 'gm'), '------')
        //     html = html.replace(k, v)
        // });
        // // html.replace()
        // console.log(datas)
        // console.log(html)
        done()
    })
})
