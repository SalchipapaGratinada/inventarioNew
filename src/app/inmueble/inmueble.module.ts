import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleCreateComponent } from './inmueble-create/inmueble-create.component';
import { InmuebleRoutingModule } from './inmueble-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    InmuebleCreateComponent
  ],
  imports: [
    CommonModule,
    InmuebleRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class InmuebleModule { }
