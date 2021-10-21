import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import template from './front-introduction.html'
import style from './front-introduction.css'
import { ApiService } from 'services/ApiService';
@Sim()
@Component({
    template,
    styles: [style]
})
export class FrontIntroduction implements OnInit {
    public quickStartCli =
`
npm init simple-boot-front projectname
cd projectname
npm start
`

    public startHTML =
`
<!DOCTYPE html>
<html>
    <header>
        <script src="./bundle.js" defer></script>
    </header>
    <body id="app">
    </body>
</html>
`

    public testHTML = '<div><b>aaaa</b></div>'

    public startTypeScript = `
const option = new SimFrontOption(window).setUrlType(UrlType.hash);
const simpleApplication = new SimpleBootFront(Index, option);
simpleApplication.run();`
    constructor(public apiService: ApiService) {
    }

    onInit(): void {
    }
    getMarkdown() {
    }
}
