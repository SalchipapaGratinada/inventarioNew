import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuebleCreateComponent } from './mueble-create/mueble-create.component';

const routes: Routes = [
  {path:'mueble', component:MuebleCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuebleRoutingModule { }
