import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacementTestComponent } from './placement-test/placement-test.component';
import { PetComponent } from './pet/pet.component';
import { FceComponent } from './fce/fce.component';
import { CaeComponent } from './cae/cae.component';
import { ImportFileComponent } from './import-file/import-file.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacementTestComponent,
    PetComponent,
    FceComponent,
    CaeComponent,
    ImportFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
