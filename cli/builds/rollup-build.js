import {exec} from "child_process";
export const rollupBuild = (argv) => {
    const path = argv.config || '';
    const watch = argv.watch ? '--watch' : '';
    const command = `node ./node_modules/.bin/rollup -c ${path} ${watch}`;
    console.log(command)
    exec(command, (error, stdout, stderr) => {
        console.log('rollup bundle execute: ', '-->', stdout, '-->', stderr, '-->', error);
    })
    // const webDirPath = path.resolve(argv.path); //path.join(__dirname, argv.path);
    // console.log('-->', webDirPath)
    // import(webDirPath).then(it => {
    //     rollup(it.default)
    // });
}
