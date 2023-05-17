import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralCreateComponent } from './general-create/general-create.component';


const routes: Routes = [
  {path:'general', component:GeneralCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
