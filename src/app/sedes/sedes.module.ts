import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedesCreateComponent } from './sedes-create/sedes-create.component';
import { SedesRoutingModule } from './sedes-routing.module';



@NgModule({
  declarations: [
    SedesCreateComponent
  ],
  imports: [
    CommonModule,
    SedesRoutingModule
  ]
})
export class SedesModule { }
