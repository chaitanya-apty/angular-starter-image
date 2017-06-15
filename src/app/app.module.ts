import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

// main routing module
import { AppRoutingModule } from './app-routing.module';

// authentication modules
import { AuthGuard } from "./shared/guards/auth.guard";
import { AuthService } from "./shared/services/auth.service";

// covalent & material module
import { CovalentLayoutModule, CovalentMenuModule } from '@covalent/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

// translation module
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from "ng2-translate/index";

// application modules
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TestComponentModule } from "./test-component/test-component.module";
import { LoginModule } from "./login/login.module";

// for AoT compile!
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        // core modules
        BrowserModule,
        HttpModule,

        // shared modules
        SharedModule.forRoot(),

        // main routing module
        AppRoutingModule,

        // design modules (material & covalent)
        CovalentLayoutModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdMenuModule,
        MdCardModule,
        MdToolbarModule,
        MdIconModule,
        MdMenuModule,
        CovalentMenuModule,

        // translate module
        TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [ Http ]
        }),

        // application modules
        TestComponentModule,
        LoginModule
    ],
    providers: [ AuthGuard, AuthService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
