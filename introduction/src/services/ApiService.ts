import { Sim } from 'simple-boot-core/decorators/SimDecorator';
// import { ProgressModal } from 'src/app/services/alert/AlertService';
@Sim()
export class ApiService {
    constructor() {
    }

    public async getBlobBase64(url: string) {
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function() {
                const base64data = reader.result;
                resolve(base64data);
            }
        });

        // const blob = await fetch(url).then((response) => response.blob());
        // return await new Promise((resolve) => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(blob);
        //     reader.onloadend = function() {
        //         const base64data = reader.result;
        //         resolve(base64data);
        //     }
        // });
    }
    public getJson(url: string) {
        return fetch(url).then((response) => response.json());
    }

    public json(url: string, requstInit?: RequestInit) {
        // RequestInfo
        return fetch(url, requstInit).then((response) => response.json());
    }
    // public post(url: string, data: any) {
    //     // const p = new ProgressModal();
    //     // p.open();
    //     // return fetch(environment.apiHostUrl + url, {
    //     //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     //     mode: 'cors', // no-cors, cors, *same-origin
    //     //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     //     credentials: 'same-origin', // include, *same-origin, omit
    //     //     headers: {
    //     //         'Content-Type': 'application/json',
    //     //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     //     },
    //     //     redirect: 'follow', // manual, *follow, error
    //     //     referrer: 'no-referrer', // no-referrer, *client
    //     //     body: JSON.stringify(data), // body data type must match "Content-Type" header
    //     // }).then(response => response.json()).catch(it => p.close()).finally(() => p.close());
    // }
}
