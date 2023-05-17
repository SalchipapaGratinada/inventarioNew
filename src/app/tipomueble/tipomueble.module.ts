import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipomuebleCreateComponent } from './tipomueble-create/tipomueble-create.component';
import { TipomuebleRoutingModule } from './tipomueble-routing.module';



@NgModule({
  declarations: [
    TipomuebleCreateComponent
  ],
  imports: [
    CommonModule,
    TipomuebleRoutingModule
  ]
})
export class TipomuebleModule { }
