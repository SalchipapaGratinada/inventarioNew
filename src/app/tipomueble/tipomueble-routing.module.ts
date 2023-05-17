import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipomuebleCreateComponent } from './tipomueble-create/tipomueble-create.component';

const routes: Routes = [
  {path:'tipomueble', component:TipomuebleCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipomuebleRoutingModule { }
