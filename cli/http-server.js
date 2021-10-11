const fs = require('fs');
const path = require('path');
const http = require('http');
const httpProxy = require('http-proxy');
const mime = require('mime-types')
const fileUtils = require("./utils/FileUtils");
// const argv = require('optimist').argv;


exports.httpServer = (argv) => {
    const webDirPath = path.resolve(argv.path); //path.join(__dirname, argv.path);
    console.log('localDist', webDirPath);
    console.log('serve', 'http://localhost:' + argv.port);
    console.log('port', argv.port);
    console.log('proxy', argv.proxy);
    console.log('watch', argv.watch);
// console.log(__dirname)
// console.log(path.join(__dirname,'/zz/asd.jpg'))
// console.log(path.dirname("/foo/bar/baz/asdf/image.png"))
// console.log(path.resolve(__dirname, "/zz/asd.jpg"))
    const httpServer = argv.proxy ? httpProxy.createProxyServer({target: argv.proxy}) : null; // .listen(99845);
    if (httpServer) {
        httpServer.on('proxyReq', function (proxyReq, req, res, options) {
            // proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
        });
    }
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

                let fileSize = fileState.size;
                const webscoketClient = `
                        <script>
                            const webSocket = new WebSocket("ws://localhost:${argv.port+1}");
                            webSocket.onmessage = function (event) {
                                const data = JSON.parse(event.data);
                                if (data.action === 'refresh') {
                                    location.reload();
                                }
                            }
                        </script>`;

                if (requestPath === '/index.html') {
                    fileSize += webscoketClient.length;
                }
                res.writeHead(200, {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'content-length': fileSize,
                    'content-type': contentType
                });

                // write
                res.write(file, 'binary');
                if (requestPath === '/index.html') {
                    res.write(webscoketClient, 'utf8');
                }



                res.end();
            })
            // Do something
        } else {
            if (argv.proxy && httpServer) {
                console.log('----->', 'proxy-->');
                httpServer.web(req, res);
            } else {
                res.writeHead(404, {'Cache-Control': 'no-cache, no-store, must-revalidate'});
                res.end();
            }
        }
    }).listen(argv.port);

    if (argv.watch) {
        const WebSocket = require('ws');
        const wss = new WebSocket.Server({port: argv.port+1});

        let start = Date.now();
        // let wantTick = false;
        const directorys = fileUtils.getDirectory(webDirPath, [webDirPath]);
        directorys.forEach(it => {
            fileUtils.watch(it, (e, filename) => {
                // console.log('change detect -->', filename, e)
                const webDirPath = path.join(it, filename);
                const exists = fs.existsSync(webDirPath);
                // console.log('path: ', exists, webDirPath)
                if (exists) {
                    const ff = fs.statSync(webDirPath)
                    console.log('watch detect path:', webDirPath, 'isFile:' + ff.isFile(), 'size:' + ff.size)
                    start = Date.now() + 1000;
                    // if (start < changeNow) {
                    //     start = changeNow + 4000;
                    //     wantTick = true;
                    // }
                }
            })
        })

        setInterval(() => {
            if (start && start < Date.now()) {
                wss.clients.forEach(function each(client) {
                    client.send(JSON.stringify({action: 'refresh'}));
                });
                // console.log('tttiiiiiiiccccccckkkk')
                start = 0;
            }
        }, 500)

        // setInterval(() => {
        //     wss.clients.forEach(function each(client) {
        //         client.send('zzz' + new Date());
        //     });
        // }, 3000);
        // const clients
        // wss.on('connection', (ws, req) => { // 웹 소켓 연결 시
        //     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        //     console.log('새로운 클라이언트 접속', ip);
        //     ws.on('message', (message) => { // 클라이언트로부터 메시지 수신 시
        //         console.log(message);
        //     });
        //     ws.on('error', (err) => { // 에러 발생 시
        //         console.error(err);
        //     });
        //     ws.on('close', () => { // 연결 종료 시
        //         console.log('클라이언트 접속 해제', ip);
        //         clearInterval(ws.interval);
        //     });
        //
        //     ws.interval = setInterval(() => {
        //         if (ws.readyState === ws.OPEN) {
        //             ws.send('서버에서 클라이언트로 메시지를 보냅니다.');
        //         }
        //     }, 3000);
        // });
    }
}
