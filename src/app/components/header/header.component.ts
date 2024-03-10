import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  search: string = '';
  constructor(private router: Router) { }
  buscar() {
    switch (this.search.toLowerCase()) {
      case 'dogs':
        this.router.navigate(['/dogs']);
        break;
      case 'clima':
        this.router.navigate(['/clima']);
        break;
      case 'github':
        this.router.navigate(['/github']);
        break;
      case 'servidor':
        this.router.navigate(['/server']);
        break;
      case 'camara': // Agregamos este caso para la búsqueda de la cámara
        this.router.navigate(['/camera']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }

}
