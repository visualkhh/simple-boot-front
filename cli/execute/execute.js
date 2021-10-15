import {exec} from "child_process";
export const execute = (argv) => {
    const cmds = [].concat(argv.cmd)
    cmds.forEach(command => {
        exec(command, (error, stdout, stderr) => {
            console.log(command, 'execute: ', '-->', stdout, '-->', stderr, '-->', error);
            console.log('');
        })
    })
}
