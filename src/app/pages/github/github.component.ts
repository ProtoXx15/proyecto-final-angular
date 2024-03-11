// app.component.ts
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule para trabajar con formularios en el componente
import { GithubService } from '../../services/github.service'; // Importa el servicio GithubService para obtener datos del usuario de GitHub

@Component({
  selector: 'app-root', // Selector del componente
  standalone: true, // Indica que el componente es independiente y no necesita de otros componentes para funcionar
  imports : [
    FormsModule // Importa el módulo FormsModule necesario para trabajar con formularios
  ],
  templateUrl: './github.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./github.component.css'] // Estilos CSS asociados al componente
})
export class GithubComponent {
  btnClick: boolean = false; // Variable para controlar si se ha hecho clic en el botón de búsqueda
  githubUser = ''; // Variable para almacenar el nombre de usuario de GitHub ingresado por el usuario
  private __githubService = inject(GithubService); // Inyecta el servicio GithubService para obtener datos del usuario de GitHub
  datosGithub: any; // Variable para almacenar los datos del usuario de GitHub

  // Método para buscar datos del usuario de GitHub
  getUser() {
    this.btnClick = true; // Marca que se ha hecho clic en el botón de búsqueda
    this.__githubService.buscarUsuario(this.githubUser).subscribe( // Llama al método buscarUsuario del servicio GithubService
      (data) => {
        this.datosGithub = this.__githubService.procesarDatosGithub(data); // Procesa los datos del usuario de GitHub recibidos del servicio
      }
    )
  }
}
