import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config/config.component';
import { ModificarComponent } from './modificar/modificar.component';



@NgModule({
  declarations: [
    ConfigComponent,
    ModificarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TratamientoModule { }
