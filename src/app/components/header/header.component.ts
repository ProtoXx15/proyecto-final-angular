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
      case 'cats':
        this.router.navigate(['/cats']);
        break;
      case 'clima':
        this.router.navigate(['/clima']);
        break;
      case 'gitHub':
        this.router.navigate(['/github']);
        break;
      case 'servidor':
        this.router.navigate(['/server']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }
}
