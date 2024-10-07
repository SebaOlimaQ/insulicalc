import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteComponent } from './paciente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrarMedicionComponent } from './registrar-medicion/registrar-medicion.component';
import { CalcularDosisComponent } from './calcular-dosis/calcular-dosis.component';
import { HistorialComponent } from './historial/historial.component';


@NgModule({
  declarations: [
    PacienteComponent,
    DashboardComponent,
    RegistrarMedicionComponent,
    CalcularDosisComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
