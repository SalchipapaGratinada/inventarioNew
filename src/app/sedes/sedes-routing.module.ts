import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedesCreateComponent } from './sedes-create/sedes-create.component';


const routes: Routes = [
  {path:'sedes', component:SedesCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedesRoutingModule { }
