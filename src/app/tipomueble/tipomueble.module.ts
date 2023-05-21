import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipomuebleCreateComponent } from './tipomueble-create/tipomueble-create.component';
import { TipomuebleRoutingModule } from './tipomueble-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    TipomuebleCreateComponent
  ],
  imports: [
    CommonModule,
    TipomuebleRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class TipomuebleModule { }
