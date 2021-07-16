import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist/dist',
        entryFileNames: 'dom-render.js',
        format: 'cjs'
    },
    plugins: [
        typescript({outDir: './dist/dist', declaration: false}),
        replace({
            "Object.defineProperty(exports, '__esModule', { value: true });": 'try{if(!exports) {var exports = {}}}catch (e) {var exports = {}} Object.defineProperty(exports, \'__esModule\', { value: true });',
            delimiters: ['\n', '\n']
        })
    ]
};
