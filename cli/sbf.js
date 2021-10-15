#!/usr/bin/env node


'use strict';
import optimist from 'optimist';
import {httpServer} from './servers/http-server.js';
import {rollupBuild} from './builds/rollup-build.js';
import CreateSvelteCmd from 'create-simple-boot-front'
import {execute} from "./execute/execute.js";
// import {ggg} from './http-server'
const argv = optimist.check((f) => {
    f.has = (key) => {
        // console.log(f._, key)
        return f._.includes(key);
    }
    return true;
})
    .default('port', 4500)
    .default('path', './dist')
    .describe('serve', 'server')
    .argv;

if (argv.argv) {
    console.log(argv);
}

const MODE_SERVE = 'serve'
const MODE_CREATE = 'create'
const MODE_EXEC = 'exec'
const MODE_ROLLUP_BUILD = 'rollup-build'
const MODES = [MODE_SERVE, MODE_CREATE, MODE_ROLLUP_BUILD, MODE_EXEC];
if (argv.help) {
   printHelp();
} else if (argv.has(MODE_SERVE)) {
    if (argv.bundle === 'rollup') {
        rollupBuild(argv);
    }
    httpServer(argv);
} else if (argv.has(MODE_CREATE)) {
    CreateSvelteCmd.run();
} else if (argv.has(MODE_ROLLUP_BUILD)) {
    rollupBuild(argv);
} else if (argv.has(MODE_EXEC)) {
    execute(argv);
} else {
    printHelp();
}


function printHelp() {
    let isChoiceMode = false;
    MODES.forEach(it => isChoiceMode = isChoiceMode || argv.has(it))
    if (isChoiceMode === false || argv.has(MODE_SERVE)) {
        console.log(`\t${MODE_SERVE}\thttp server and proxy`)
        console.log(`\t  --path\tdist path`)
        console.log(`\t  --port\tserver port`)
        console.log(`\t  --proxy\tproxy url`)
        console.log(`\t  --bundle\tex)rollup`)
        console.log(`\t  --watch\tfileChange browser refresh`)
    }
    console.log('');
    if (isChoiceMode === false || argv.has(MODE_CREATE)) {
        console.log(`\t${MODE_CREATE}\tsimple-boot-front template project`)
    }
    console.log('');
    if (isChoiceMode === false || argv.has(MODE_ROLLUP_BUILD)) {
        console.log(`\t${MODE_ROLLUP_BUILD}\trollup bundle`)
        console.log(`\t  --config\trollup config path`)
        console.log(`\t  --watch\trollup watch`)
    }
    console.log('');
    if (isChoiceMode === false || argv.has(MODE_EXEC)) {
        console.log(`\t${MODE_EXEC}\tExecuting Shell Commands (child-process)`)
        console.log(`\t  --cmd\tcopmmands ... (multiple)`)
    }
}
