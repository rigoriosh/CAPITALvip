import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './componentes/admin/admin.component';
import { Prueba1Component } from './componentes/prueba1/prueba1.component';
import { Prueba2Component } from './componentes/prueba2/prueba2.component';

const rutas: Routes = [
    {path: '', component: AdminComponent},
    {path: 'p1', component: Prueba1Component},
    {path: 'p2', component: Prueba2Component}
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }