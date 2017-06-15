import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

// main routing module
import { AppRoutingModule } from './app-routing.module';

// application modules
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TestComponentModule } from "./test-component/test-component.module";
import { LoginModule } from "./login/login.module";

// authentication modules
import { AuthGuard } from "./shared/guards/auth.guard";
import { AuthService } from "./shared/services/auth.service";

// translation module
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from "ng2-translate/index";

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
      
        // translate module
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
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
