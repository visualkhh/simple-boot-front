import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/com/simple/boot/SimpleApplication.ts',
    // input: 'src/com/simple/boot/util/window/LocationUtils.ts',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [
        // typescript()
        typescript({lib: ['es5', 'es6', 'dom'], target: 'es5'})
    ]
};
