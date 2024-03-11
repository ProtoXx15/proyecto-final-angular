import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule para trabajar con formularios en el componente
import { Router, RouterLink } from '@angular/router'; // Importa el Router y RouterLink para la navegación entre diferentes rutas en la aplicación

@Component({
  selector: 'app-header', // Selector del componente
  standalone: true, // Indica que el componente es independiente y no necesita de otros componentes para funcionar
  imports: [
    RouterLink, // Importa el RouterLink para la navegación a través de enlaces
    FormsModule], // Importa el módulo FormsModule necesario para trabajar con formularios
  templateUrl: './header.component.html', // Plantilla HTML asociada al componente
  styleUrl: './header.component.css' // Estilos CSS asociados al componente
})
export class HeaderComponent {
  search: string = ''; // Variable que almacena el texto de búsqueda introducido por el usuario

  constructor(private router: Router) { } // Constructor del componente, inyecta el Router para la navegación entre rutas

  buscar() { // Método para realizar la búsqueda según el texto ingresado por el usuario
    switch (this.search.toLowerCase()) { // Convierte el texto de búsqueda a minúsculas para hacer la comparación
      case 'dogs': // Si el texto coincide con 'dogs', navega a la ruta '/dogs'
        this.router.navigate(['/dogs']);
        break;
      case 'clima': // Si el texto coincide con 'clima', navega a la ruta '/clima'
        this.router.navigate(['/clima']);
        break;
      case 'github': // Si el texto coincide con 'github', navega a la ruta '/github'
        this.router.navigate(['/github']);
        break;
      case 'recetas': // Si el texto coincide con 'recetas', navega a la ruta '/recetas'
        this.router.navigate(['/recetas']);
        break;
      case 'adivinanza': // Si el texto coincide con 'adivinanza', navega a la ruta '/adivinanza'
        this.router.navigate(['/adivinanza']);
        break;
      case 'camara': // Si el texto coincide con 'camara', navega a la ruta '/camera'
        this.router.navigate(['/camera']);
        break;
      case 'calculadora': // Si el texto coincide con 'calculadora', navega a la ruta '/calculadora'
        this.router.navigate(['/calculadora']);
        break;
      default: // Si no coincide con ninguna opción anterior, navega a la ruta '/home' por defecto
        this.router.navigate(['/home']);
    }
  }
}
