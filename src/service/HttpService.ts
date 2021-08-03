import {Sim} from 'simple-boot-core/decorators/SimDecorator'
@Sim()
export class HttpService {
    constructor() {
    }

    // delete(url: string, headers?: Object): Observable<AjaxResponse> {
    //     return ajax.delete(url, headers)
    // }
    //
    // get(url: string, headers?: Object): Observable<AjaxResponse> {
    //     return ajax.get(url, headers)
    // }
    //
    // getJson<T>(url: string, headers?: Object): Observable<T> {
    //     return ajax.getJSON<T>(url, headers)
    // }
    //
    // patch(url: string, body?: any, headers?: Object): Observable<AjaxResponse> {
    //     return ajax.patch(url, body, headers)
    // }
    //
    // post(url: string, body?: any, headers?: Object): Observable<AjaxResponse> {
    //     return ajax.post(url, body, headers)
    // }
    //
    // postJson(url: string, body?: any, headers = {}): Observable<AjaxResponse> {
    //     headers = Object.assign(headers, { 'Content-Type': 'application/json' });
    //     return ajax.post(url, body, headers)
    // }
    //
    // put(url: string, body?: any, headers?: Object): Observable<AjaxResponse> {
    //     return ajax.put(url, body, headers)
    // }
}
