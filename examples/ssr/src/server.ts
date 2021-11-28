import * as JSDOM from 'jsdom';
import { UserServiceServer } from '../server/UserServiceServer';
import { IncomingMessage, Server, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';
import { Intent } from 'simple-boot-core/intent/Intent';

const frontDistPath = 'dist-front';
const indexHTML = fs.readFileSync(path.join(frontDistPath, 'index.html'), 'utf8');
const jsdom = new JSDOM.JSDOM(indexHTML);
jsdom.reconfigure({
    url: 'http://localhost',
});
console.log('jsdom', jsdom.window.document)
global.document = jsdom.window.document;
// @ts-ignore
global.window = jsdom.window;
global.history = jsdom.window.history;
global.Event = jsdom.window.Event;
global.NodeFilter = jsdom.window.NodeFilter;
global.Node = jsdom.window.Node;
global.HTMLElement = jsdom.window.HTMLElement;
global.Element = jsdom.window.Element;
console.log('--', document)

console.log('---', window.location.href, window.location.pathname)
//
// @ts-ignore
import ('./bootfactory').then(it => {
    const simpleBootFront = it.factory(window, [UserServiceServer]);
    simpleBootFront.run()
    const server = new Server();
    server.on('request', (req: IncomingMessage, res: ServerResponse) => {
        const url = req.url ?? '';
        const isBypass = (url?.endsWith('js') || url?.endsWith('map') || url?.endsWith('ico'));
        if (isBypass) {
            fs.readFile(path.join(frontDistPath, url), (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }
                res.writeHead(200);
                res.end(data);
            });
        } else if(req.headers.accept === 'intent' && req.headers.urls) {
            console.log('---------2--intent request');
            const urls = (req.headers.urls as string).split(',');
            req.on('data', (body: string) => {
                const data = JSON.parse(body);
                console.log('-------data', data);
                const url = urls[0];

                const rdatas = simpleBootFront.publishIntent(new Intent(url, data));
                const rdata = rdatas[0];
                if (rdata instanceof Promise) {
                    //https://nodejs.org/ko/docs/guides/anatomy-of-an-http-transaction/
                    rdata.then(it => {
                        res.writeHead(200, {
                            'Content-Type': 'application/json'
                        });
                        // set header json
                        // res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify(it));
                    })
                }
                console.log('-------rdata', rdata);

            })

        } else {
            simpleBootFront.go(url);
            res.writeHead(200);
            res.end(document.documentElement.outerHTML);
        }
        //                 res.writeHead(200);
        //                 res.end(data);
    });
    server.listen(8081);
})
