import { Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camera', // Selector del componente
  templateUrl: './camera.component.html', // Plantilla HTML asociada al componente
  styleUrls: ['./camera.component.css'] // Estilos CSS asociados al componente
})
export class CameraComponent implements OnDestroy {
  cameraStream: MediaStream | undefined; // Variable para almacenar el flujo de la cámara
  @ViewChild('cameraFeed') cameraFeed: ElementRef<HTMLVideoElement> | undefined; // Referencia al elemento de video de la cámara

  // Método para abrir la cámara y obtener el flujo de video
  openCamera() {
    navigator.mediaDevices.getUserMedia({ video: true }) // Obtiene acceso al dispositivo de la cámara
      .then(stream => {
        if (this.cameraFeed) { // Comprueba si el elemento de video de la cámara está definido
          this.cameraFeed.nativeElement.srcObject = stream; // Asigna el flujo de la cámara al elemento de video
        }
        this.cameraStream = stream; // Almacena el flujo de la cámara en la variable de clase
      })
      .catch(error => {
        console.error('Error opening camera:', error); // Maneja cualquier error que ocurra al abrir la cámara
      });
  }

  // Método para cerrar la cámara liberando los recursos
  closeCamera() {
    if (this.cameraStream) { // Comprueba si hay un flujo de cámara activo
      this.cameraStream.getTracks().forEach(track => { // Obtiene todas las pistas de la cámara y las detiene
        track.stop();
      });
      this.cameraStream = undefined; // Limpia la variable de flujo de cámara
    }
  }

  // Método ejecutado cuando se destruye el componente
  ngOnDestroy() {
    this.closeCamera(); // Llama al método para cerrar la cámara y liberar recursos
  }

  // Método ejecutado después de que Angular haya inicializado las vistas del componente
  ngAfterViewInit() {
    // Llamamos a openCamera() aquí para asegurarnos de que el elemento de video esté disponible.
    this.openCamera(); // Abre la cámara para mostrar el video en el elemento de video
  }
}
