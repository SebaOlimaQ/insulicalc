import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { MedicoComponent } from './medico.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { GestionarTratamientoComponent } from './gestionar-tratamiento/gestionar-tratamiento.component';


@NgModule({
  declarations: [
    MedicoComponent,
    ListaPacientesComponent,
    GestionarTratamientoComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule
  ]
})
export class MedicoModule { }
