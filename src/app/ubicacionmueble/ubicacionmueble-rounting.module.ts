import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicacionmuebleCreateComponent } from './ubicacionmueble-create/ubicacionmueble-create.component';

const routes: Routes = [
  {path:'ubicacionmueble', component:UbicacionmuebleCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbicacionmuebleRountingModule { }
