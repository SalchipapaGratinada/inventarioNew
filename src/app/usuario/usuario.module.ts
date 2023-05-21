import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    UsuarioCreateComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class UsuarioModule { }
