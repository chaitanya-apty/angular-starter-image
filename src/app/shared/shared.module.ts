// core modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// translate module
import { TranslateModule } from "ng2-translate/index";

// covalent & material module
import { CovalentMenuModule, CovalentLayoutModule } from "@covalent/core";
import { 
  MdIconModule, MdToolbarModule, MdCardModule, MdMenuModule, MdButtonModule, MdInputModule 
} from "@angular/material";

// browser animation module
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// shared components
import { NavbarComponent } from "./navbar/navbar.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";


@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      TranslateModule,

      // design modules (material & covalent)
      CovalentLayoutModule,
      BrowserAnimationsModule,
      MdButtonModule,
      MdMenuModule,
      MdCardModule,
      MdToolbarModule,
      MdIconModule,
      CovalentMenuModule,
      MdInputModule
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
      TranslateModule,

      // material & covalent design modules
      CovalentLayoutModule,
      BrowserAnimationsModule,
      MdButtonModule,
      MdMenuModule,
      MdCardModule,
      MdToolbarModule,
      MdIconModule,
      CovalentMenuModule,
      MdInputModule
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
