/* eslint-disable */
// import * as request from 'supertest'
import {of} from 'rxjs'
import {mergeMap} from 'rxjs/operators'

import * as ts from "typescript";
// typescript decorator
// https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
describe('typescript', () => {
    test('typescript test', async (done) => {

        const source = "let x: string  = 'string'";

        let result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS }});

        console.log(JSON.stringify(result));
        done()
    })

    test('typescript test2', async (done) => {
//         function compile(fileNames: string[], options: ts.CompilerOptions): void {
//             // Create a Program with an in-memory emit
//             const createdFiles = {}
//             const host = ts.createCompilerHost(options);
//             host.writeFile = (fileName: string, contents: string) => createdFiles[fileName] = contents
//
//             // Prepare and emit the d.ts files
//             const program = ts.createProgram(fileNames, options, host);
//             program.emit();
//
//             // Loop through all the input files
//             fileNames.forEach(file => {
//                 console.log("### JavaScript\n")
//                 console.log(host.readFile(file))
//
//                 console.log("### Type Definition\n")
//                 const dts = file.replace(".js", ".d.ts")
//                 console.log(createdFiles[dts])
//             })
//         }
//
// // Run the compiler
//         compile(process.argv.slice(2), {
//             allowJs: true,
//             declaration: true,
//             emitDeclarationOnly: true,
//         });
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
