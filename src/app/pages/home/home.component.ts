import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', // Selector del componente
  templateUrl: './home.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./home.component.css'] // Estilos CSS asociados al componente
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.animateText(); // Método que se llama al inicializar el componente para animar el texto
  }

  // Método para animar el texto del nombre
  animateText() {
    setTimeout(() => {
      let nameElement = document.getElementById('name') as HTMLElement; // Obtiene el elemento con el id 'name'
      if (nameElement) {
        nameElement.style.display = 'inline'; // Cambia el estilo del elemento para que sea visible
        setTimeout(() => {
          nameElement.style.color = 'orange'; // Cambia el color del texto a naranja
          nameElement.style.fontSize = '48px'; // Cambia el tamaño del texto a 48px
        }, 1000); // Espera 1 segundo antes de aplicar los estilos de color y tamaño
      }
    }, 2000); // Espera 2 segundos antes de hacer visible el texto
  }
}
