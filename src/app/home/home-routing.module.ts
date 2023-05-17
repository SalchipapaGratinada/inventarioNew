import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCreateComponent } from './home-create/home-create.component';

const routes: Routes = [
  {path:'home', component:HomeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
