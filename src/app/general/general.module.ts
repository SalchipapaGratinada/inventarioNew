import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralCreateComponent } from './general-create/general-create.component';
import { GeneralRoutingModule } from './general-routing.module';



@NgModule({
  declarations: [
    GeneralCreateComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
