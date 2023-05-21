import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionmuebleCreateComponent } from './ubicacionmueble-create/ubicacionmueble-create.component';
import { UbicacionmuebleRountingModule } from './ubicacionmueble-rounting.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    UbicacionmuebleCreateComponent
  ],
  imports: [
    CommonModule,
    UbicacionmuebleRountingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class UbicacionmuebleModule { }
