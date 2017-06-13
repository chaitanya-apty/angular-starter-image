import { NgModule } from '@angular/core';

import { TestComponentComponent } from './test-component.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponentRoutingModule } from "./test-component-routing.module";
import { TestComponentService } from "./test-component.service";

@NgModule({
  imports: [ TestComponentRoutingModule, SharedModule ],
  declarations: [ TestComponentComponent ],
  exports: [ TestComponentComponent ],
  providers: [ TestComponentService ]
})
export class TestComponentModule { }
