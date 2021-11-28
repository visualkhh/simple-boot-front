import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import html from 'rollup-plugin-html';
import css from 'rollup-plugin-import-css';
import typescript from 'rollup-plugin-typescript2';
import sourcemaps from 'rollup-plugin-sourcemaps';
import del from 'rollup-plugin-delete';
export default {
    input: 'src/index.ts',
    output: {
        sourcemap: true,
        dir: 'dist-front',
        entryFileNames: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        // babel(),
        css(),
        html({include: '**/*.html'}),
        copy({
            targets: [
                { src: 'index.html', dest: 'dist-front' },
                { src: 'assets', dest: 'dist-front' }
            ]
        }),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.front.json', clean: true }),
        sourcemaps(),
        replace({
            preventAssignment: true,
            "Object.defineProperty(exports, '__esModule', { value: true });": "try{if(!exports) {var exports = {}}}catch (e) {var exports = {}} Object.defineProperty(exports, '__esModule', { value: true });",
            delimiters: ['\n', '\n']
        }),
        del({ targets: ['dist-front/*'] })
    ]
};
