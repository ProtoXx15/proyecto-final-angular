import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUsuarios(page: number, perPage: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios?page=${page}&perPage=${perPage}`);
  }
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/usuarios/${id}`);
  }
  createUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios`, usuario);
  }
}
