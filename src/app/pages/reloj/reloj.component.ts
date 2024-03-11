import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj-mundial',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojMundialComponent implements OnInit {
  horasMundiales: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.actualizarHoras();
    setInterval(() => {
      this.actualizarHoras();
    }, 1000);
  }

  actualizarHoras() {
    const zonasHorarias = ['UTC', 'America/New_York', 'Europe/London', 'Europe/Madrid', 'Europe/Berlin', 'Asia/Tokyo', 'Asia/Kolkata', 'Australia/Sydney']; // Agrega las zonas horarias deseadas
    this.horasMundiales = zonasHorarias.map(zona => {
      const hora = new Date().toLocaleTimeString('es-ES', {timeZone: zona});
      return {zona, hora};
    });
  }
}

