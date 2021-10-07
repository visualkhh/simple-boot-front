#!/usr/bin/env node


'use strict';
const optimist = require('optimist');
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
// console.log(argv);

const MODE_SERVE = 'serve'
const MODE_CREATE = 'create'
const MODES = [MODE_SERVE, MODE_CREATE];
if (argv.help) {
   printHelp();
} else if (argv.has(MODE_SERVE)) {
    require('./http-server.js').httpServer(argv)
}  else if (argv.has(MODE_CREATE)) {
    require('create-simple-boot-front/bin/run')
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
    }
    console.log('');
    if (isChoiceMode === false || argv.has(MODE_CREATE)) {
        console.log(`\t${MODE_CREATE}\tsimple-boot-front template project`)
    }
}
