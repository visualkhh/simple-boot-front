export declare class ApiService {
    constructor();
    getBlobBase64(url: string): Promise<unknown>;
    getJson(url: string): Promise<any>;
    json(url: string, requstInit?: RequestInit): Promise<any>;
}
