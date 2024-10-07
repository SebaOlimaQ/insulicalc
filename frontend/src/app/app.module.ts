import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importar los módulos de la aplicación
import { AppRoutingModule } from './app-routing.module';  // Módulo de rutas principal
import { CoreModule } from './core/core.module';          // Módulo Core con servicios, guards y lógica compartida
import { SharedModule } from './shared/shared.module';    // Módulo Compartido (componentes reutilizables)

// Importar el componente raíz de la aplicación
import { AppComponent } from './app.component';

// Interceptor para autenticación
import { AuthInterceptor } from './core/interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent  // Declarar el componente raíz de la aplicación
  ],
  imports: [
    BrowserModule,              // Módulo principal para Angular en el navegador
    HttpClientModule,           // Permite realizar llamadas HTTP a APIs
    FormsModule,                // Módulo para formularios template-driven
    ReactiveFormsModule,        // Módulo para formularios reactivos
    BrowserAnimationsModule,    // Habilita el soporte para animaciones
    AppRoutingModule,           // Módulo de rutas principal
    CoreModule,                 // Importar el módulo Core (guards, servicios)
    SharedModule                // Módulo compartido con componentes reutilizables
  ],
  providers: [
    // Registra el AuthInterceptor para manejo de tokens y errores
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true  // Permitir múltiples interceptores
    },
    // Registrar RoleGuard para protección basada en roles si es necesario
  ],
  bootstrap: [AppComponent]  // Componente raíz para iniciar la aplicación
})
export class AppModule { }

