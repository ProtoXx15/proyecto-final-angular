import { Component, inject } from '@angular/core';
import { DogsService } from "../../services/dogs.service"; // Importa el servicio DogsService para obtener imágenes de perros

@Component({
  selector: 'app-Dogs', // Selector del componente
  standalone: true, // Indica que el componente es independiente y no necesita de otros componentes para funcionar
  imports: [], // No hay importaciones adicionales en este componente
  templateUrl: './dogs.component.html', // Plantilla HTML asociada al componente
  styleUrl: './dogs.component.css' // Estilos CSS asociados al componente (el nombre correcto del atributo es styleUrls)
})
export class DogsComponent {
  imgDog: string = '' // Variable para almacenar la URL de la imagen del perro
  private _DogsService = inject(DogsService) // Inyecta el servicio DogsService para obtener imágenes de perros

  // Método para obtener una imagen de perro
  getDog() {
    this._DogsService.getDog().subscribe((data) => { // Llama al método getDog del servicio DogsService
      this.imgDog = this._DogsService.processDog(data); // Procesa la imagen del perro recibida del servicio
    })
  }
}
