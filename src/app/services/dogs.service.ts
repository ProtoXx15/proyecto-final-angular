import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DogsService { // Servicio para obtener una imagen de perro
  private _http = inject(HttpClient); // Inicializa HttpClient para realizar solicitudes HTTP
  private urlBase: string = `https://random.dog/woof.json`; // Url base para obtener una imagen de perro
  private urlDog: string = ''; // Url de la imagen de perro
  getDog(): Observable<any> {   // Método para obtener una imagen de perro
    return this._http.get(this.urlBase); // Realiza una solicitud GET al servidor para obtener una imagen de perro
  }
  processDog(data: any): any { // Procesa la imagen de perro recibida del servidor
    this.urlDog = data.url; // Almacena la URL de la imagen de perro
    return this.urlDog; // Retorna la URL de la imagen de perro
  }
  constructor() { }
}
