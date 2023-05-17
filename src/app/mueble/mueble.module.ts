import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuebleCreateComponent } from './mueble-create/mueble-create.component';
import { MuebleRoutingModule } from './mueble-routing.module';



@NgModule({
  declarations: [
    MuebleCreateComponent
  ],
  imports: [
    CommonModule,
    MuebleRoutingModule
  ]
})
export class MuebleModule { }
