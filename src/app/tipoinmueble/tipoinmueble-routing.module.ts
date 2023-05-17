import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoinmuebleCreateComponent } from './tipoinmueble-create/tipoinmueble-create.component';


const routes: Routes = [
  {path:'tipoinmueble', component:TipoinmuebleCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoinmuebleRoutingModule { }
