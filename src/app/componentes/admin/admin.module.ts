import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './componentes/admin/admin.component';
import { AddDrinksComponent } from './componentes/add-drinks/add-drinks.component';
import { AddFoodsComponent } from './componentes/add-foods/add-foods.component';
import { NewdrinkComponent } from './componentes/newdrink/newdrink.component';


@NgModule({
    declarations: [
        AdminComponent,
        AddDrinksComponent,
        AddFoodsComponent,
        NewdrinkComponent
    ],
    imports: [
        AdminRoutingModule,
        SharedModule
    ],
    providers: []
})
export class AdminModule{

}