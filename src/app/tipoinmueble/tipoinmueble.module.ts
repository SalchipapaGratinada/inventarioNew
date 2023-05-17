import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoinmuebleCreateComponent } from './tipoinmueble-create/tipoinmueble-create.component';
import { TipoinmuebleRoutingModule } from './tipoinmueble-routing.module';



@NgModule({
  declarations: [
    TipoinmuebleCreateComponent
  ],
  imports: [
    CommonModule,
    TipoinmuebleRoutingModule
  ]
})
export class TipoinmuebleModule { }
