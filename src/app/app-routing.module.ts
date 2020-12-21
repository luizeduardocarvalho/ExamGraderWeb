import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacementTestComponent } from './placement-test/placement-test.component';


const routes: Routes = [
  { path: 'placement-test', component: PlacementTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
