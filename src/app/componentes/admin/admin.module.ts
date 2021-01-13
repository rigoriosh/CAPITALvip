import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './componentes/admin/admin.component';
import { Prueba1Component } from './componentes/prueba1/prueba1.component';
import { Prueba2Component } from './componentes/prueba2/prueba2.component';


@NgModule({
    declarations: [
        Prueba1Component,
        Prueba2Component,
        AdminComponent
    ],
    imports: [
        AdminRoutingModule,
        SharedModule
    ],
    providers: []
})
export class AdminModule{

}