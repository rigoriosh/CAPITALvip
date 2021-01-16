import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './componentes/admin/admin.component';
import { AddDrinksComponent } from './componentes/add-drinks/add-drinks.component';
import { AddFoodsComponent } from './componentes/add-foods/add-foods.component';
import { NewdrinkComponent } from './componentes/newdrink/newdrink.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        AdminComponent,
        AddDrinksComponent,
        AddFoodsComponent,
        NewdrinkComponent
    ],
    imports: [
        AdminRoutingModule,
        SharedModule,
        FormsModule,
        CommonModule
    ],
    providers: []
})
export class AdminModule{

   

}
