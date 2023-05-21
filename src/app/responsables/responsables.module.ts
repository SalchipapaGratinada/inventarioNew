import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsablesCreateComponent } from './responsables-create/responsables-create.component';
import { ResponsablesRountingModule } from './responsables-rounting.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ResponsablesCreateComponent
  ],
  imports: [
    CommonModule,
    ResponsablesRountingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class ResponsablesModule { }
