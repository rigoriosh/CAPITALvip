import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { FoodsComponent } from './components/foods/foods.component';
import { MenuComponent } from './components/menu/menu.component';

const rutas: Routes = [
    {path: '', component: MenuComponent},
    {path: 'drinks', component: BebidasComponent},
    {path: 'foods', component: FoodsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }