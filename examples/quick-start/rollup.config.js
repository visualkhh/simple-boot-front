import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy';
import html from 'rollup-plugin-html';
import css from 'rollup-plugin-import-css';
import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
// import commonjs from 'rollup-plugin-commonjs'
export default {
    input: 'src/index.ts',
    output: {
        sourcemap: true,
        dir: 'dist',
        entryFileNames: 'bundle.js',
        format: 'cjs',
        esModule: false,
        intro: 'try{if(!exports){exports = {};} }catch(e){var exports = {}};'
    },
    plugins: [
        // babel(),
        css(),
        html({include: '**/*.html'}),
        json(),
        copy({
            targets: [
                { src: 'index.html', dest: 'dist' },
                { src: 'assets', dest: 'dist' }
            ]
        }),
        nodeResolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json'}),
        del({ targets: ['dist/*'] })
    ]
};
