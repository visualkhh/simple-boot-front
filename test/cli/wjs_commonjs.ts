const fs = require('fs');
const path = require('path');
const startWorkingDirectory = process.cwd()
const start = process.argv[2]
const starts = process.argv[2].split('/')
const startDirectory = starts.slice(0, starts.length - 1).join('/')
const dist = process.argv[3]
const dists = process.argv[3].split('/')
const distDirectory = dists.slice(0, dists.length - 1).join('/')

const dic = new Map<string, string>();
const result = new class {
    data = 'exports = {"__esModule": true};';

    append(line: string): void {
        this.data += '\n' + line
    }
}()

if (!fs.existsSync(distDirectory)) {
    fs.mkdirSync(distDirectory);
}
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
})
// console.log('--RRR', require.resolve('reflect-metadata'))
// console.log('--RRR', require.resolve('simple-boot-front'))
// console.log('--R22RR', require.resolve('simple-boot-front/SimpleApplication.js'))
const move = (targetPath: string) => {

    if (!fs.existsSync(path.resolve(targetPath))) {
        // eslint-disable-next-line prefer-regex-literals
        const r = new RegExp('\\.js$', 'gm');
        targetPath = targetPath.replace(r, '')
        targetPath = require.resolve(targetPath).replace(startWorkingDirectory, startWorkingDirectory + '/dist-tsc')
        // console.log('-----XXXXXXXXXXX', targetPath, path.resolve(targetPath))
        // targetPath = path.resolve(startWorkingDirectory + '/dist-tsc/node_modules/' + targetPath)
        // if (!fs.existsSync(path.resolve(targetPath))) {
        //     console.log('-----XXXXXXXXXXX-***->', targetPath);
        //     // eslint-disable-next-line prefer-regex-literals
        //     const r = new RegExp('\\.js$', 'gm');
        //     targetPath = targetPath.replace(r, '/index.js')
        //     console.log('-----XXXXXXXXXXX-*********->', targetPath);
        // }
        // console.log('-----XXXXXXXXXXX-->', targetPath)
    }
    const resolvePath = path.resolve(targetPath);
    const paths = targetPath.split('/')
    const directory = path.resolve(paths.slice(0, paths.length - 1).join('/'))
    const file = paths.slice(paths.length - 1).join('/')
    console.log('move----------', process.cwd(), targetPath, directory, file)
    // require.resolve("moduleName/README.md")

    if (dic.get(resolvePath)) {
        return 'exports = ' + dic.get(resolvePath) + ';';
    }

    process.chdir(directory)
    const data = fs.readFileSync(file, 'utf8');
    let fileData = '';
    for (const it of data.split('\n')) {
        // eslint-disable-next-line prefer-regex-literals
        const requireRegExp = new RegExp('require\\(["\'](.*)["\']\\)', 'gm');
        // eslint-disable-next-line prefer-regex-literals
        const variableRegExp = new RegExp('var (.*) = .*', 'gm');
        const requireExec = requireRegExp.exec(it);
        const variableExec = variableRegExp.exec(it);
        if (requireExec) {
            // console.log('dicdic-->', resolvePath, dic);
            fileData += it.replace(requireRegExp, 'function() {' + move(requireExec[1] + '.js') + ' \nreturn exports;}();');
            if (variableExec && variableExec[1]) {
                dic.set(resolvePath, variableExec[1])
            }
        } else {
            fileData += it + '\n';
        }
        process.chdir(directory)
    }

    return fileData;
}

const s = move(start);
result.append(s);

process.chdir(startWorkingDirectory)
fs.writeFileSync(dist, result.data, 'utf8')
