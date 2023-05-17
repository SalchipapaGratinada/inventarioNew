import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsablesCreateComponent } from './responsables-create/responsables-create.component';
import { ResponsablesRountingModule } from './responsables-rounting.module';



@NgModule({
  declarations: [
    ResponsablesCreateComponent
  ],
  imports: [
    CommonModule,
    ResponsablesRountingModule
  ]
})
export class ResponsablesModule { }
