// core modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// translate module
import { TranslateModule } from "ng2-translate/index";

import { NavbarComponent } from "./navbar/navbar.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";


@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      TranslateModule
  ],
  declarations: [
      ToolbarComponent,
      NavbarComponent
  ],
  exports: [
      ToolbarComponent,
      NavbarComponent,
      CommonModule,
      FormsModule,
      RouterModule,
      TranslateModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
