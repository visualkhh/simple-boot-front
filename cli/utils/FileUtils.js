const fs = require('fs');

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}
function getDirectory (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            files_.push(name);
        }
    }
    return files_;
}

function watch(filename, callback) {
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

module.exports = {
    getFiles,
    getDirectory,
    watch
}
