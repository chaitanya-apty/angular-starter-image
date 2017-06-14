import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from "./login.routing.module";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  imports: [ LoginRoutingModule, SharedModule, FormsModule, ReactiveFormsModule ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ],
  providers: []
})
export class LoginModule { }
