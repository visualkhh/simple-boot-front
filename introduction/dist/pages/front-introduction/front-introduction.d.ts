import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import { ApiService } from 'services/ApiService';
export declare class FrontIntroduction implements OnInit {
    apiService: ApiService;
    constructor(apiService: ApiService);
    onInit(): void;
}
