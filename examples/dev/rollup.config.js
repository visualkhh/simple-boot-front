import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'
import replace from '@rollup/plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import html from 'rollup-plugin-html'
import css from 'rollup-plugin-import-css'
import typescript from '@rollup/plugin-typescript'
import sourcemaps from 'rollup-plugin-sourcemaps'
import del from 'rollup-plugin-delete'

export default {
    input: 'src/index.ts',
    output: {
        sourcemap: true,
        dir: 'dist',
        entryFileNames: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        // babel(),
        css(),
        html({include: '**/*.html'}),
        json(),
        copy({
            targets: [
                {src: 'index.html', dest: 'dist'},
                {src: 'offline.html', dest: 'dist'},
                {src: 'service-worker.js', dest: 'dist'},
                {src: 'manifest.json', dest: 'dist'},
                {src: 'pwabuilder-sw.js', dest: 'dist'},
                {src: 'googlebe4b1abe81ab7cf3.html', dest: 'dist'},
                {src: 'favicon.ico', dest: 'dist'},
                {src: 'assets', dest: 'dist'}
            ]
        }),
        resolve(),
        commonjs(),
        typescript({tsconfig: 'tsconfig.json'}),
        // typescript({ tsconfig: './tsconfig.front.json', clean: true }),
        // sourcemaps(),
        // replace({
        //     preventAssignment: true,
        //     "Object.defineProperty(exports, '__esModule', { value: true });": "",
        //     delimiters: ['\n', '\n']
        // }),
        // replace({
        //     preventAssignment: true,
        //     "Object.defineProperty(exports, '__esModule', { value: true });": "try{if(!exports) {var exports = {}}}catch (e) {var exports = {}} Object.defineProperty(exports, '__esModule', { value: true });",
        //     delimiters: ['\n', '\n']
        // }),
        del({targets: ['dist/*']})
    ]
}
