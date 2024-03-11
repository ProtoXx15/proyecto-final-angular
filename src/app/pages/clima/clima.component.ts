import { Component, inject } from '@angular/core';
import { ClimaService } from '../../services/clima.service'; // Importa el servicio ClimaService para obtener datos del clima
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule para trabajar con formularios en el componente

@Component({
  selector: 'app-clima', // Selector del componente
  templateUrl: './clima.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./clima.component.css'], // Estilos CSS asociados al componente
  standalone: true, // Indica que el componente es independiente y no necesita de otros componentes para funcionar
  imports: [FormsModule], // Importa el módulo FormsModule necesario para trabajar con formularios
})
export class ClimaComponent {
  ciudad: string = ''; // Variable para almacenar el nombre de la ciudad ingresada por el usuario
  private _climaService = inject(ClimaService); // Inyecta el servicio ClimaService para obtener datos del clima
  datosClima: any; // Variable para almacenar los datos del clima

  // Método para buscar datos del clima de la ciudad ingresada por el usuario
  buscarCiudad() {
    this._climaService.buscarClima(this.ciudad).subscribe( // Llama al método buscarClima del servicio ClimaService
      (data) => {
        this.datosClima = this._climaService.procesarDatosClima(data); // Procesa los datos del clima recibidos del servicio
      });
  }
}
