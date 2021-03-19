import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [ //Modulos
    CommonModule
  ]
})
export class HeroeModulo{}
