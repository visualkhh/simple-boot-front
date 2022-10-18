import fs from 'fs';

export const getFiles = (dir, files_) => {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}
export const getDirectory = (dir, files_) => {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            files_.push(name);
        }
    }
    return files_;
}

export const watch = (filename, callback) => {
    fs.watch(filename, callback);
    // function (event, filename) {
    //     console.log('event is: ' + event);
    //     if (filename) {
    //         console.log('filename provided: ' + filename);
    //     } else {
    //         console.log('filename not provided');
    //     }
    // }
}
