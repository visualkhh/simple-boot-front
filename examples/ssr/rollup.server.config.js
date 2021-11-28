// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import html from "@rollup/plugin-html";
// import typescript from 'rollup-plugin-typescript2';
import html  from 'rollup-plugin-html';
import nodeResolve from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";
import css from "rollup-plugin-import-css";
// import html from "rollup-plugin-html";

export default {
    input: 'src/server.ts',
    output: {
        sourcemap: true,
        dir: 'dist-server',
        entryFileNames: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        css(),
        html({
            include: "**/*.html",
            // htmlMinifier: {
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     useShortDoctype: true
            // }
        }),
        // resolve(),
        // nodeResolve(),
        typescript({tsconfig: 'tsconfig.server.json'}),
        del({ targets: ['dist-server/*'] })
        // commonjs(),
        // typescript({ tsconfig: './tsconfig.json', clean: true })
    ]
};
