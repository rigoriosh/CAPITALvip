import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './componentes/administrador/administrador.component';



const rutas: Routes = [
    {path: '', component: AdministradorComponent}
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class AdministradorRoutingModule { }