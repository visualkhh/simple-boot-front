import template from './index.html';
import { PostConstruct, Sim } from 'simple-boot-core/decorators/SimDecorator';
import css from './index.css'
import { User } from './User';
import { Component } from 'simple-boot-front/decorators/Component';
import { RandomUtils } from 'simple-boot-core/utils/random/RandomUtils';
import { FrontLifeCycle } from 'simple-boot-front/module/FrontLifeCycle';
import { ScriptUtils } from 'dom-render/utils/script/ScriptUtils';

declare var naver: any;
@Sim({scheme: 'index'})
@Component({
    template,
    styles: [css]
})
export class Index implements FrontLifeCycle {

    public user?: User;
    public data = {name: 'visualkhh'}
    public cnt1 = 0;
    public cnt2 = 0;
    public test = {name: 'test', age:2}
    public randomColorData = '#ff0000';
    public date = new Date();
    map?: any;

    onChangedRender(): void {
        console.log('index--> onChangedRender')
    }
    onInitedChild(): void {
        console.log('index--> onInitedChild')
    }
    onFinish(): void {
        console.log('index--> onFinish')
    }
    onCreate(): void {
        console.log('index--> onCreate')
    }

    async onInit() {
        console.log('index--> onInit')
        const data = await ScriptUtils.loadScript('https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=83bfuniegk&amp;submodules=panorama,geocoder,drawing,visualization')
        const mapElement = document.querySelector('#map');

        this.map = Object.freeze(new naver.maps.Map(mapElement, {
            // zoom: 13, //지도의 초기 줌 레벨
            // minZoom: 7, //지도의 최소 줌 레벨
            useStyleMap: true,
            zoomControl: true, // 줌 컨트롤의 표시 여부
            mapTypeControl: true,
            zoomControlOptions: { // 줌 컨트롤의 옵션
                style: naver.maps.ZoomControlStyle.SMALL
                //     position: naver.maps.Position.CENTER_LEFT
            }
        }));
    }
    @PostConstruct
    public g(s: User) {
    }

    randomColor() {
        console.log('------',this)
        this.randomColorData = RandomUtils.getRandomColor();
    }

    async onInitRender() {
    }
}
