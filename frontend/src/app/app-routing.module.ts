import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'register', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },

  // Rutas protegidas para pacientes
  {
    path: 'paciente',
    loadChildren: () => import('./features/paciente/paciente.module').then(m => m.PacienteModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'Paciente' }
  },

  // Rutas protegidas para médicos
  {
    path: 'medico',
    loadChildren: () => import('./features/medico/medico.module').then(m => m.MedicoModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'Medico' }
  },

  { path: '**', redirectTo: '/login' }  // Redirige cualquier ruta inválida al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
