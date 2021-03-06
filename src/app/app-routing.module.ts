import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: 'auth', component: AutenticacionComponent},
  {path: 'home',
    component: HomeComponent,
    children: [
      {path: 'admin',   loadChildren: () => import('./componentes/admin/admin.module').then( m => m.AdminModule)},
      {path: 'administrador', loadChildren: () => import('./modulos/administrador/administrador.module').then(m => m.AdministradorModule)},
      {path: 'menu',    loadChildren: () => import('./modulos/menu/menu.module').then( m => m.MenuModule)},
      {path: 'rockola', loadChildren: () => import('./modulos/rockola/rockola.module').then( m => m.RockolaModule)},
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
