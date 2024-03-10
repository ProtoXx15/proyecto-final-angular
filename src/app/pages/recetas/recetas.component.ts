import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Receta {
  id: number;
  nombre: string;
  descripcion: string;
  ingredientes: string[];
  preparacion: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class recetasComponent {
  searchTerm: string = '';
  recetas: Receta[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

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

  search(term: string) {
    this.loading = true;
    this.http.get<any>('http://localhost:3000/recetas?q=' + term)
      .subscribe(data => {
        this.recetas = data.recetas;
        this.loading = false;
      });
  }
}
