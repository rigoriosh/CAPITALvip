import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion.component';
import { BebidasComponent } from './componentes/bebidas/bebidas.component';
import { FoodsComponent } from './componentes/foods/foods.component';
import { HomeComponent } from './componentes/home/home.component';
import { RockolaComponent } from './componentes/rockola/rockola.component';

const routes: Routes = [
  {path: 'auth', component: AutenticacionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'drinks', component: BebidasComponent},
  {path: 'foods', component: FoodsComponent},
  {path: 'rockola', component: RockolaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
