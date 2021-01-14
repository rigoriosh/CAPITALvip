import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDrinksComponent } from './componentes/add-drinks/add-drinks.component';
import { AddFoodsComponent } from './componentes/add-foods/add-foods.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { NewdrinkComponent } from './componentes/newdrink/newdrink.component';

const rutas: Routes = [
    {path: '', component: AdminComponent},
    {path: 'addDrinks', component: AddDrinksComponent},
    {path: 'addFoods', component: AddFoodsComponent},
    {path: 'addDrinks/drink/:id', component: NewdrinkComponent}
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }