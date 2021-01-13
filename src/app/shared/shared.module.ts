import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaShared1Component } from './components/prueba-shared1/prueba-shared1.component';
import { ResaltadoDirective } from './directives/resaltado/resaltado.directive';
import { CapitalizadoPipe } from './pipes/capitalizado/capitalizado.pipe';
import { PruebaShared2Component } from './components/pruebaShared2/prueba-shared2/prueba-shared2.component';



@NgModule({
  declarations: [PruebaShared1Component, ResaltadoDirective, CapitalizadoPipe, PruebaShared2Component],
  imports: [
    CommonModule
  ],
  exports:[
    PruebaShared1Component, ResaltadoDirective, CapitalizadoPipe, PruebaShared2Component
  ]
})
export class SharedModule { }
