import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmuebleCreateComponent } from './inmueble-create/inmueble-create.component';

const routes: Routes = [
  {path:'inmueble', component:InmuebleCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmuebleRoutingModule { }
