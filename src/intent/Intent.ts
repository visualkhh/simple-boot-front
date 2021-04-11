export class Intent<T = any, E extends Event = Event> {
    // uri example: mymodule://asd/asd/b?a=545&aa=33&wow=wow
    // <스킴>://<사용자이름>:<비밀번호>@<호스트>:<포트>/<경로>?<질의>#<프레그먼트>
    constructor(public uri?: string, public data?: T, public event?: E) {
    }

    get scheme() {
        return this.uri?.split('://')[0];
    }

    get paths() {
        return (this.uri?.split('://')[1]?.split('/') ?? []).map(it => it.split('?')[0]);
    }

    get params() {
        const param = {} as { [key:string]: string };
        this.uri?.split('://')[1]?.split('?')[1]?.split('&')?.forEach(it => {
            const a = it.split('=')
            param[a[0]] = a[1];
        })
        return param;
    }
    // get params() {
    //     return this.uri?.split('://')[1]?.split('?')[1]?.split('&')?.map(it => {
    //         const a = it.split('=')
    //         return {
    //             key: a[0],
    //             value: a[1]
    //         }
    //     }) ?? []
    // }
}
