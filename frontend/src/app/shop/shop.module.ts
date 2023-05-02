import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaqueteTuristicoCbaComponent } from './paquete-turistico-cba/paquete-turistico-cba.component';
import { PaqueteTuristicoCpazComponent } from './paquete-turistico-cpaz/paquete-turistico-cpaz.component';
import { PaqueteTuristicoLaCumbrecitaComponent } from './paquete-turistico-la-cumbrecita/paquete-turistico-la-cumbrecita.component';
import { PaqueteTuristicoTraslasierraComponent } from './paquete-turistico-traslasierra/paquete-turistico-traslasierra.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PaqueteTuristicoCbaComponent,
    PaqueteTuristicoCpazComponent,
    PaqueteTuristicoLaCumbrecitaComponent,
    PaqueteTuristicoTraslasierraComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PaqueteTuristicoCbaComponent,
    PaqueteTuristicoCpazComponent,
    PaqueteTuristicoLaCumbrecitaComponent,
    PaqueteTuristicoTraslasierraComponent
  ]
})
export class ShopModule { }
