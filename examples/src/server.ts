import {SimpleBootHttpServer} from 'simple-boot-http-server/SimpleBootHttpServer';
import {HttpServerOption} from 'simple-boot-http-server/option/HttpServerOption';
import {Filter} from 'simple-boot-http-server/filters/Filter';
import {IncomingMessage, ServerResponse} from 'http';
import {AppRouter} from 'simple-boot-front/app/AppRouter';

const httpServerOption = new HttpServerOption();
httpServerOption.filters.push(
    {
        on: (req: IncomingMessage, res: ServerResponse) => {
            console.log('2-----on')
        },
        before: (req: IncomingMessage, res: ServerResponse, moduleInstance: any) => {
            console.log('2-----before', moduleInstance)
        },
        after: (req: IncomingMessage, res: ServerResponse, moduleInstance: any) => {
            console.log('2-----after', moduleInstance)
        }
    } as Filter)
new SimpleBootHttpServer(AppRouter, httpServerOption).run();
console.log('simple-boot-http-server start host:' + (httpServerOption.listen.hostname ?? 'localhost'), ' port:' + httpServerOption.listen.port);
