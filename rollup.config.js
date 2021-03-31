import typescript from '@rollup/plugin-typescript';
// import multiInput from 'rollup-plugin-multi-input';
// import typescript from 'rollup-plugin-typescript2';

export default {
    // input: ['./src/**/*.ts', './src/com/simple/boot/SimpleApplication.ts'],
    // input: ['./src/com/simple/**/*.ts'],
    input: [
        './src/com/simple/boot/SimpleApplication.ts',
        './src/com/simple/boot/decorators/SimDecorator.ts',
        './src/com/simple/boot/module/LifeCycle.ts',
        './src/com/simple/boot/module/Module.ts',
        './src/com/simple/boot/module/Router.ts',
        './src/com/simple/boot/proxy/SimProxyMethodHandler.ts',
        './src/com/simple/boot/render/Renderer.ts',
        './src/com/simple/boot/service/view/View.ts',
        './src/com/simple/boot/service/view/ViewService.ts',
        './src/com/simple/boot/service/AjaxService.ts',
        './src/com/simple/boot/simstance/SimstanceManager.ts',
        './src/com/simple/boot/throwable/NoSuchSim.ts',
        './src/com/simple/boot/types/Types.ts',
        './src/com/simple/boot/util/random/RandomUtils.ts',
        './src/com/simple/boot/util/valid/ValidUtils.ts',
        './src/com/simple/boot/util/window/LocationUtils.ts'
    ],
    output: {
        // file: './dist/index.js',
        dir: 'dist',
        format: 'esm'
        // exports: 'named'
        // format: 'cjs'
    },
    plugins: [
        // multiInput(),
        typescript()
        // typescript({
        //     tsconfig: 'tsconfig.json'
        // })
    ],
    dest: 'dist/bundle.js'
}
