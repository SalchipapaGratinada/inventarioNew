import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsablesCreateComponent } from './responsables-create/responsables-create.component';


const routes: Routes = [
  {path:'responsables', component:ResponsablesCreateComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ResponsablesRountingModule { }
