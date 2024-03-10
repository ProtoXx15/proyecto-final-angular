import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],
  standalone: true,
  imports: [FormsModule],

})
export class recetasComponent {
  searchTerm: string = '';
  recetas: any[] = [];
  loading: boolean = true;
  nuevaRecetaVisible: boolean = false;
  nuevaReceta: any = {
    id: 0,
    nombre: '',
    descripcion: '',
    lugar_de_creacion: '',
    precio: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchRecetas();
  }

  fetchRecetas() {
    this.http.get<any>('http://localhost:3000/recetas')
      .subscribe(data => {
        this.recetas = data.recetas;
        this.loading = false;
      });
  }

  eliminarReceta(id: number) {
    this.http.delete(`http://localhost:3000/recetas/${id}`).subscribe(() => {
      this.recetas = this.recetas.filter(receta => receta.id !== id)
    }) 
  }

  agregarNuevaReceta() {
    // Aquí podrías enviar la nueva receta al servidor si es necesario
    // Por simplicidad, solo la agregaremos localmente
    this.nuevaReceta.id = this.recetas.length + 1;
    this.nuevaReceta.precio = '$ ' + this.nuevaReceta.precio;
    // this.recetas.push({...this.nuevaReceta});
    this.http.post('http://localhost:3000/recetas', this.nuevaReceta).subscribe(
      receta => {
        this.recetas.push(receta);
        this.nuevaReceta = {
          id: 0,
          nombre: '',
          descripcion: '',
          lugar_de_creacion: '',
          precio: ''
        };
        this.nuevaRecetaVisible = false;
      }
    )
  }
}
