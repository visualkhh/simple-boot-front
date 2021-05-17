// const testFolder = './dist/';
const fs = require('fs');
const path = require('path');
//
// fs.readdir(testFolder, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// });

const glob = require('glob')

const options = {}
// options is optional
// const target = './dist-tsc/**/*.js';
const target = './dist-tsc/test.js';
glob(target, options, function (er, files) {
    // eslint-disable-next-line prefer-regex-literals
    const regExp = new RegExp('import.*[\'"]([a-zA-Z].*)[\'"]', 'gm');
    files.forEach(filePath => {
        let fileData = '';
        const file = path.resolve(filePath);
        const data = fs.readFileSync(file, 'utf8');
        for (const it of data.split('\n')) {
            const exec = regExp.exec(it);
            if (exec) {
                // fileData += it.replace(regExp, '"/node_modules/' + exec[1] + '"') + '\n';
                fileData += it.replace(exec[1], '/node_modules/' + exec[1]) + '\n';
            } else {
                fileData += it + '\n'
            }
        }
        fs.writeFileSync(filePath, fileData, 'utf8')
        console.log(data)
    })
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
})
