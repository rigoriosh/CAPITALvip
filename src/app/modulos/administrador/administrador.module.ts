import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { AdministradorRoutingModule } from './administrador-routing.module';



@NgModule({
  declarations: [AdministradorComponent],
  imports: [
    CommonModule, AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
