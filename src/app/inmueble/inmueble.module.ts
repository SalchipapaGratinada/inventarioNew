import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleCreateComponent } from './inmueble-create/inmueble-create.component';
import { InmuebleRoutingModule } from './inmueble-routing.module';



@NgModule({
  declarations: [
    InmuebleCreateComponent
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule
  ]
})
export class InmuebleModule { }
