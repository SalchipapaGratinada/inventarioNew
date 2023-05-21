import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilesCreateComponent } from './perfiles-create/perfiles-create.component';
import { PerfilesRoutingModule } from './perfiles-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    PerfilesCreateComponent
  ],
  imports: [
    CommonModule,
    PerfilesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class PerfilesModule { }
