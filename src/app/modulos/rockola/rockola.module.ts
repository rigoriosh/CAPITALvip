import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { Pruebarockola2Component } from './components/pruebarockola2/pruebarockola2.component';
import { RockolaComponent } from './components/rockola/rockola.component';
import { RockolaRoutingModule } from './rockola-routing.module';



@NgModule({
  declarations: [RockolaComponent, Pruebarockola2Component],
  imports: [RockolaRoutingModule, SharedModule]
})
export class RockolaModule { }
