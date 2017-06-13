import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {TestComponentModule} from "./test-component/test-component.module";

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        HttpModule,
        SharedModule.forRoot(),
        AppRoutingModule,
        TestComponentModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
