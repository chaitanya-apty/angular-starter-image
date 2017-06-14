import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestComponentComponent } from './test-component.component';
import { AuthGuard } from "../shared/guards/auth.guard";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'test', component: TestComponentComponent, canActivate: [ AuthGuard ] }
    ])
  ],
  exports: [RouterModule]
})
export class TestComponentRoutingModule { }
