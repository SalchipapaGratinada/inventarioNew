import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilesCreateComponent } from './perfiles-create/perfiles-create.component';

const routes: Routes = [
  {path:'perfiles', component:PerfilesCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }
