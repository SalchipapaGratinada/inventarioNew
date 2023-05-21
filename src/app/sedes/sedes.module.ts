import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedesCreateComponent } from './sedes-create/sedes-create.component';
import { SedesRoutingModule } from './sedes-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    SedesCreateComponent
  ],
  imports: [
    CommonModule,
    SedesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class SedesModule { }
