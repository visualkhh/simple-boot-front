const fs = require('fs');
const path = require('path');
const http = require('http');
const httpProxy = require('http-proxy');
const mime = require('mime-types')
const argv = require('optimist').argv;
const webDirPath = path.resolve(argv.path); //path.join(__dirname, argv.path);
// console.log(process.argv, argv)
console.log('dist', webDirPath);
console.log('port', 'http://localhost:' + argv.port);
console.log('proxy', argv.proxy);
// console.log(__dirname)
// console.log(path.join(__dirname,'/zz/asd.jpg'))
// console.log(path.dirname("/foo/bar/baz/asdf/image.png"))
// console.log(path.resolve(__dirname, "/zz/asd.jpg"))
const httpServer = httpProxy.createProxyServer({target: argv.proxy}); // .listen(99845);
httpServer.on('proxyReq', function(proxyReq, req, res, options) {
    // proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});

//
// Create your target server
//
http.createServer(function (req, res) {
    let requestPath = req.url.split('?')[0];
    if (requestPath === '/') {
        requestPath += 'index.html'
    }

    const localPath = path.join(webDirPath, requestPath);
    console.log('----->', localPath, requestPath);
    if (fs.existsSync(localPath)) {
        const fileState = fs.statSync(localPath);
        const contentType = mime.lookup(localPath);
        console.log('----->', 'isFile', fileState.isFile());
        fs.readFile(localPath, 'binary', function (err, file) {
            res.writeHead(200, {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'content-length': fileState.size,
                'content-type': contentType
            });
            res.write(file, 'binary');
            res.end();
        })
        // Do something
    } else {
        if (argv.proxy) {
            console.log('----->', 'proxy-->');
            httpServer.web(req, res);
        }
    }
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    // res.end();
}).listen(argv.port);
