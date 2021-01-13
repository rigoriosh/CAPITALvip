import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pruebarockola1Component } from './components/pruebarockola1/pruebarockola1.component';
import { RockolaComponent } from './components/rockola/rockola.component';

const rutas: Routes = [
    {path: '', component: RockolaComponent},
    {path: 'pr1', component: Pruebarockola1Component}
];


@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class RockolaRoutingModule { }