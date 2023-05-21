import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuebleCreateComponent } from './mueble-create/mueble-create.component';
import { MuebleRoutingModule } from './mueble-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    MuebleCreateComponent
  ],
  imports: [
    CommonModule,
    MuebleRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class MuebleModule { }
