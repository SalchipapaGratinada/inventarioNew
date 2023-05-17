import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilesCreateComponent } from './perfiles-create/perfiles-create.component';
import { PerfilesRoutingModule } from './perfiles-routing.module';



@NgModule({
  declarations: [
    PerfilesCreateComponent
  ],
  imports: [
    CommonModule,
    PerfilesRoutingModule
  ]
})
export class PerfilesModule { }
