import { RawSet } from 'dom-render/RawSet';
export type OnInitParameter = {
    makerObj: any;
    rawSet: RawSet;
}
export interface OnInit {
    onInit(parameter: OnInitParameter): void;
}
