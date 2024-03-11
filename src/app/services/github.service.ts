import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService { 
  private _http = inject(HttpClient);
  private urlBase = 'https://api.github.com/users';
  buscarUsuario(username: string): Observable<any> {
    return this._http.get(`${this.urlBase}/${username}`);
  }
  procesarDatosGithub(data: any): any { // Procesa los datos del usuario de GitHub recibidos del servicio
    return {
      nombre: data.login, // Nombre del usuario
      img: data.avatar_url, // URL de la imagen de perfil
      followers: data.followers, // Número de seguidores
      following: data.following, // Número de usuarios que sigue
      admin: data.site_admin, // Es administrador
      enlace: data.html_url // URL del perfil
    }
  }
  constructor() { }
}
