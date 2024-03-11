import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root' // Se marca el servicio como proporcionado en el ámbito raíz
})
export class ClimaService {
 private _http = inject(HttpClient); // Inyecta HttpClient para realizar solicitudes HTTP
 private urlBase = 'https://api.openweathermap.org/data/2.5/weather'; // URL base de la API de OpenWeatherMap
 private apiKey = '605507acf87117e111e54a3ab5238541'; // Clave de API para acceder a la API de OpenWeatherMap
 private difKelvin = 273.15; // Diferencia de temperatura en Kelvin para convertir a Celsius

 // Método para buscar el clima de una ciudad específica
 buscarClima(ciudad: string): Observable<any> {
  return this._http.get(`${this.urlBase}?q=${ciudad}&appid=${this.apiKey}`); // Realiza una solicitud GET a la API de OpenWeatherMap para obtener el clima de la ciudad
 }

 // Método para procesar los datos del clima recibidos de la API
 procesarDatosClima(data: any): any {
  return {
   ciudadNombre: data.name, // Nombre de la ciudad
   paisNombre: data.sys.country, // Nombre del país
   temperatura: Math.floor(data.main.temp - this.difKelvin), // Temperatura convertida a Celsius
   humedad: data.main.humidity, // Humedad
   descripcion: data.weather[0].description, // Descripción del clima
   icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` // URL del ícono del clima
  };
 }
}
