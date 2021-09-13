import template from './index.html';
import { PostConstruct, Sim } from 'simple-boot-core/decorators/SimDecorator';
import css from './index.css'
import { User } from './User';
import { Component } from 'simple-boot-front/decorators/Component';
import { RandomUtils } from 'simple-boot-core/utils/random/RandomUtils';
import { FrontLifeCycle } from 'simple-boot-front/module/FrontLifeCycle';
import { ScriptUtils } from 'dom-render/utils/script/ScriptUtils';
import { DomRenderProxy } from 'dom-render/DomRenderProxy';

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

        this.map = DomRenderProxy.final(new naver.maps.Map(mapElement, {
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

        var locationBtnHtml = '<a href="#" class="btn_mylct"><span class="spr_trff spr_ico_mylct">NAVER 그린팩토리</span></a>';
        naver.maps.Event.once(this.map, 'init_stylemap', () => {
            //customControl 객체 이용하기
            const customControl = new naver.maps.CustomControl(locationBtnHtml, {
                position: naver.maps.Position.TOP_LEFT
            });
            const searchBtn = new naver.maps.CustomControl('<button class="btn btn-primary btn-search" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>', {
                position: naver.maps.Position.LEFT_BOTTOM
            });

            customControl.setMap(this.map);
            searchBtn.setMap(this.map);

            const domEventListener = naver.maps.Event.addDOMListener(customControl.getElement(), 'click', () => {
                if (navigator.geolocation) {
                    /**
                     * navigator.geolocation 은 Chrome 50 버젼 이후로 HTTP 환경에서 사용이 Deprecate 되어 HTTPS 환경에서만 사용 가능 합니다.
                     * http://localhost 에서는 사용이 가능하며, 테스트 목적으로, Chrome 의 바로가기를 만들어서 아래와 같이 설정하면 접속은 가능합니다.
                     * chrome.exe --unsafely-treat-insecure-origin-as-secure="http://example.com"
                     */
                    navigator.geolocation.getCurrentPosition((position) => {
                        var infowindow = new naver.maps.InfoWindow();
                        var location = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        this.map.setCenter(location); // 얻은 좌표를 지도의 중심으로 설정합니다.
                        this.map.setZoom(18); // 지도의 줌 레벨을 변경합니다.
                        infowindow.setContent('<div style="padding:20px;">' + 'geolocation.getCurrentPosition() 위치' + '</div>');
                        infowindow.open(this.map, location);
                        // console.log('Coordinates: ' + location.toString());
                    }, ()=>{});
                }
                //map.setCenter(new naver.maps.LatLng(37.3595953, 127.1053971));
            });

            //Map 객체의 controls 활용하기
            // var $locationBtn = $(locationBtnHtml),
            //     locationBtnEl = $locationBtn[0];
            //
            // map.controls[naver.maps.Position.LEFT_CENTER].push(locationBtnEl);
            //
            // var domEventListener = naver.maps.Event.addDOMListener(locationBtnEl, 'click', function() {
            //     map.setCenter(new naver.maps.LatLng(37.3595953, 127.1553971));
            // });
        });
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
