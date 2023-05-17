import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCreateComponent } from './home-create/home-create.component';
import { HomeRoutingModule } from './home-routing.module';

import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [
    HomeCreateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule
  ]
})
export class HomeModule { }
