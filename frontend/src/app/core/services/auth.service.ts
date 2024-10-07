import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Método para obtener el token de autenticación desde localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método de ejemplo para guardar el token
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para borrar el token del almacenamiento local (logout)
  clearToken(): void {
    localStorage.removeItem('authToken');
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  // Método para obtener el rol del usuario (para el RoleGuard)
  getUserRole(): string | null {
    return localStorage.getItem('userRole');  // Asumiendo que el rol también se guarda en localStorage
  }
}

