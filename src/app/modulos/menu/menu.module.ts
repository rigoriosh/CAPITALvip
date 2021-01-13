import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { CardDrinkComponent } from './components/card-drink/card-drink.component';



@NgModule({
  declarations: [BebidasComponent, CardDrinkComponent],
  imports: [
    CommonModule, MenuRoutingModule,
  ]
})
export class MenuModule { }
