import { RawSet } from 'dom-render/rawsets/RawSet';
export type OnInitParameter = {
    makerObj: any;
    rawSet: RawSet;
}
export interface OnInit {
    onInit(...data: any): any;
}
