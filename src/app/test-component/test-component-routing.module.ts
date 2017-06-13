import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'test', component: TestComponentComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TestComponentRoutingModule { }
