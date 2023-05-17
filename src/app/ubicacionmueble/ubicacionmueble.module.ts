import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionmuebleCreateComponent } from './ubicacionmueble-create/ubicacionmueble-create.component';
import { UbicacionmuebleRountingModule } from './ubicacionmueble-rounting.module';



@NgModule({
  declarations: [
    UbicacionmuebleCreateComponent
  ],
  imports: [
    CommonModule,
    UbicacionmuebleRountingModule
  ]
})
export class UbicacionmuebleModule { }
