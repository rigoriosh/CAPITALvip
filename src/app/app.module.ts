import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { BebidasComponent } from './componentes/bebidas/bebidas.component';
import { FoodsComponent } from './componentes/foods/foods.component';
import { RockolaComponent } from './componentes/rockola/rockola.component';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    HomeComponent,
    AdminComponent,
    NavBarComponent,
    BebidasComponent,
    FoodsComponent,
    RockolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
