import { Component } from '@angular/core';
import { TranslateService } from "ng2-translate/index";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    showImage = false;

    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
