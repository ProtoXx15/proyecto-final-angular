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
      case 'recetas':
        this.router.navigate(['/recetas']);
        break;
      case 'adivinanza':
        this.router.navigate(['/adivinanza']);
        break;
      case 'camara':
        this.router.navigate(['/camera']);
        break;
      case 'calculadora':
        this.router.navigate(['/calculadora']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }
}
