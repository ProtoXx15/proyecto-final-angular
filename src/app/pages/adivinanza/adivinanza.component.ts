import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa el módulo FormsModule para trabajar con formularios en el componente

@Component({
  selector: 'app-adivinanza', // Selector del componente
  standalone: true, // Indica que el componente es independiente y no necesita de otros componentes para funcionar
  imports: [FormsModule], // Importa el módulo FormsModule necesario para trabajar con formularios
  templateUrl: './adivinanza.component.html', // Plantilla HTML asociada al componente
  styleUrl: './adivinanza.component.css' // Estilos CSS asociados al componente
})
export class AdivinanzaComponent {
  numeroAzar = Math.floor(Math.random() * 100 + 1); // Genera un número aleatorio entre 1 y 100
  numeroEntrada: number = 0; // Variable que almacena el número ingresado por el usuario
  mensaje:string = ''; // Variable para mostrar mensajes de retroalimentación al usuario
  intentos:number= 5; // Variable para contar el número de intentos

  comprobar() { // Método para comprobar si el número ingresado es correcto
    if (isNaN(this.numeroEntrada) || (this.numeroEntrada < 1) || (this.numeroEntrada > 100)) { // Comprueba si el número ingresado está dentro del rango permitido
      this.mensaje = "Por favor, ingresa un número entre el 1 y el 100"; // Mensaje de error si el número está fuera del rango
      return; // Retorna para detener la ejecución del método
    }
    console.log(this.numeroAzar); // Muestra el número a adivinar en la consola (para propósitos de depuración)
    if (this.numeroAzar === this.numeroEntrada) { // Comprueba si el número ingresado es igual al número a adivinar
      this.mensaje = "¡¡HAS ACERTADO!!"; // Mensaje de éxito si el número es correcto
    } else if (this.numeroAzar > this.numeroEntrada) { // Comprueba si el número a adivinar es mayor que el número ingresado
      this.mensaje = "El número a adivinar es mayor"; // Mensaje si el número a adivinar es mayor
    } else {
      this.mensaje = "El número a adivinar es menor"; // Mensaje si el número a adivinar es menor
    }
    this.intentos--; // Reduce el contador de intentos en uno
    if (this.intentos == 0) { // Comprueba si se han agotado los intentos
      this.mensaje = "¡Te has quedado sin intentos! El número era " + this.numeroAzar; // Mensaje si se agotan los intentos
    }
  }
}
