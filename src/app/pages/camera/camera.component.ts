import { Component, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnDestroy {
  cameraStream: MediaStream | undefined;
  @ViewChild('cameraFeed') cameraFeed: ElementRef<HTMLVideoElement> | undefined;

  openCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (this.cameraFeed) {
          this.cameraFeed.nativeElement.srcObject = stream;
        }
        this.cameraStream = stream;
      })
      .catch(error => {
        console.error('Error opening camera:', error);
      });
  }

  closeCamera() {
    if (this.cameraStream) {
      this.cameraStream.getTracks().forEach(track => {
        track.stop();
      });
      this.cameraStream = undefined;
    }
  }

  ngOnDestroy() {
    this.closeCamera();
  }

  ngAfterViewInit() {
    // Llamamos a openCamera() aquí para asegurarnos de que el elemento de video esté disponible.
    this.openCamera();
  }
}

