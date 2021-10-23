import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-introduction.html'
import style from './front-introduction.css'
import { ApiService } from 'services/ApiService';
import { ScriptUtils } from 'dom-render/utils/script/ScriptUtils';
@Sim()
@Component({
    template,
    styles: [style]
})
export class FrontIntroduction implements OnInit {

    constructor(public apiService: ApiService) {
    }

    onInit(): void {
        // ScriptUtils.loadScript('https://registry.npmjs.org/simple-boot-front').then(it => {
        //     console.log('?', it)
        // });
        fetch('https://registry.npmjs.org/simple-boot-front', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, cors, *same-origin
            // mode: 'no-cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                // 'Accept': 'application/vnd.npm.install-v1+json',
                // 'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            // body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then(async it => {
            console.log('-ff->', it.body)
            const reader = new FileReader();
            reader.readAsDataURL(await it.blob());
            reader.onloadend = function() {
                console.log(reader.result);
            }
        })
    }
    getMarkdown() {
    }
}
