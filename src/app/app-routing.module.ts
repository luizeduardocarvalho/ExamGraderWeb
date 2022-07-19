import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacementTestComponent } from './placement-test/placement-test.component';
import { PetComponent } from './pet/pet.component';
import { FceComponent } from './fce/fce.component';
import { CaeComponent } from './cae/cae.component';
import { AppComponent } from './app.component';
import { ImportFileComponent } from './import-file/import-file.component';

const routes: Routes = [
  { path: 'placement-test', component: PlacementTestComponent },
  { path: 'pet', component: PetComponent },
  { path: 'fce', component: FceComponent },
  { path: 'cae', component: CaeComponent },
  { path: '', component: ImportFileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
