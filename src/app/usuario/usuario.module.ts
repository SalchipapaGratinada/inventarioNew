import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioRoutingModule } from './usuario-routing.module';



@NgModule({
  declarations: [
    UsuarioCreateComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
