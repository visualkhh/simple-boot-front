import { RouterAction } from 'simple-boot-core/route/RouterAction';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import { Navigation } from 'simple-boot-front/service/Navigation';
export declare class Index implements OnInit, RouterAction {
    navagation: Navigation;
    child?: any;
    private route;
    private category?;
    private detail?;
    detailsItems: string[];
    constructor(navagation: Navigation);
    onInit(): void;
    changeCategory(data: string): void;
    changeDetail(data: string): void;
    getPath(depth: number): string;
    getDetails(prefix?: string): string[];
    canActivate(url: any, module: any): void;
}
