import { rollup } from 'rollup';
import path from 'path';
// const typescript2 = require('rollup-plugin-typescript2');
// const resolve = require('rollup-plugin-node-resolve');
// function rollupBuild({ inputOptions, outputOptions }): Promise<any> {
//     return rollup(inputOptions).then(bundle => bundle.write(outputOptions));
// }

export const rollupBuild = (argv) => {
    const webDirPath = path.resolve(argv.path); //path.join(__dirname, argv.path);
    console.log('-->', webDirPath)
    import(webDirPath).then(it => {
        rollup(it.default)
    });
}
