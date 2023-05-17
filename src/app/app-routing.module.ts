import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component:AuthComponent },
  { path: 'dashboard', component:PagesComponent,
    children:[
      {path: 'home',
        loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
      },
      {path: 'sedes',
        loadChildren:() => import('./sedes/sedes.module').then(m => m.SedesModule)
      },
      {path: 'perfiles',
        loadChildren:() => import('./perfiles/perfiles.module').then(m => m.PerfilesModule)
      },
      {path: 'responsables',
        loadChildren:() => import('./responsables/responsables.module').then(m => m.ResponsablesModule)
      },
      {path: 'tipomueble',
        loadChildren:() => import('./tipomueble/tipomueble.module').then(m => m.TipomuebleModule)
      },
      {path: 'tipoinmueble',
        loadChildren:() => import('./tipoinmueble/tipoinmueble.module').then(m => m.TipoinmuebleModule)
      },
      {path: 'ubicacionmueble',
        loadChildren:() => import('./ubicacionmueble/ubicacionmueble.module').then(m => m.UbicacionmuebleModule)
      },
      {path: 'mueble',
        loadChildren:() => import('./mueble/mueble.module').then(m => m.MuebleModule)
      },
      {path: 'inmueble',
        loadChildren:() => import('./inmueble/inmueble.module').then(m => m.InmuebleModule)
      },
      {path: 'usuario',
        loadChildren:() => import('./usuario/usuario.module').then(m => m.UsuarioModule)
      },
      {path: 'general',
        loadChildren:() => import('./general/general.module').then(m => m.GeneralModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
