import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralCreateComponent } from './general-create/general-create.component';
import { GeneralRoutingModule } from './general-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    GeneralCreateComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ]
})
export class GeneralModule { }
