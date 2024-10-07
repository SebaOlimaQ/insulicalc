import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token de autorización del AuthService
    const authToken = this.authService.getToken();

    // Clonar la solicitud para agregar el header de autorización
    let authReq = req;
    if (authToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`  // Agregar el header de Authorization con el token
        }
      });
    }

    // Manejar la solicitud y capturar errores globalmente
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {  // Si el error es 401, redirigir al login
          this.router.navigate(['/login']);
        }
        return throwError(() => error);  // Devolver el error para ser manejado por componentes específicos
      })
    );
  }
}
