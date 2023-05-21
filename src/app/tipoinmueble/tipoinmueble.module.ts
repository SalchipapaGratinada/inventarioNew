import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoinmuebleCreateComponent } from './tipoinmueble-create/tipoinmueble-create.component';
import { TipoinmuebleRoutingModule } from './tipoinmueble-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    TipoinmuebleCreateComponent
  ],
  imports: [
    CommonModule,
    TipoinmuebleRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class TipoinmuebleModule { }
