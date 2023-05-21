import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from './pages/pages.module';
import { SedesModule } from './sedes/sedes.module';
import { AuthModule } from './auth/auth.module';
import { GeneralModule } from './general/general.module';
import { InmuebleModule } from './inmueble/inmueble.module';
import { MuebleModule } from './mueble/mueble.module';
import { PerfilesModule } from './perfiles/perfiles.module';
import { ResponsablesModule } from './responsables/responsables.module';
import { TipoinmuebleModule } from './tipoinmueble/tipoinmueble.module';
import { TipomuebleModule } from './tipomueble/tipomueble.module';
import { UbicacionmuebleModule } from './ubicacionmueble/ubicacionmueble.module';
import { UsuarioModule } from './usuario/usuario.module';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    PagesModule,
    SedesModule,
    AuthModule,
    GeneralModule,
    InmuebleModule,
    MuebleModule,
    PerfilesModule,
    ResponsablesModule,
    TipoinmuebleModule,
    TipomuebleModule,
    UbicacionmuebleModule,
    UsuarioModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
