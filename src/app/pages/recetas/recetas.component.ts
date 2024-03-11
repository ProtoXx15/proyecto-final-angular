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
  searchTerm: string = ''; // Término de búsqueda para filtrar recetas
  recetas: any[] = []; // Lista de recetas
  loading: boolean = true; // Indica si se están cargando las recetas
  nuevaRecetaVisible: boolean = false; // Indica si el formulario para agregar una nueva receta está visible
  nuevaReceta: any = { // Objeto para almacenar los datos de una nueva receta
    id: 0,
    nombre: '',
    descripcion: '',
    lugar_de_creacion: '',
    precio: ''
  };

  constructor(private http: HttpClient) { } // Inicializa HttpClient para realizar solicitudes HTTP

  ngOnInit() {
    this.fetchRecetas(); // Método para cargar las recetas al inicializar el componente
  }

  // Método para obtener las recetas desde el servidor
  fetchRecetas() {
    this.http.get<any>('http://localhost:3000/recetas') // Realiza una solicitud GET al servidor para obtener las recetas
      .subscribe(data => {
        this.recetas = data.recetas; // Almacena las recetas obtenidas del servidor
        this.loading = false; // Marca que las recetas han sido cargadas
      });
  }

  // Método para eliminar una receta
  eliminarReceta(id: number) {
    this.http.delete(`http://localhost:3000/recetas/${id}`).subscribe(() => { // Realiza una solicitud DELETE al servidor para eliminar la receta
      this.recetas = this.recetas.filter(receta => receta.id !== id); // Elimina la receta de la lista localmente
    });
  }

  // Método para agregar una nueva receta
  agregarNuevaReceta() {
    this.nuevaReceta.id = this.recetas.length + 1; // Asigna un nuevo ID a la nueva receta
    this.nuevaReceta.precio = '$ ' + this.nuevaReceta.precio; // Agrega el símbolo de dólar al precio de la nueva receta
    this.http.post('http://localhost:3000/recetas', this.nuevaReceta).subscribe( // Realiza una solicitud POST al servidor para agregar la nueva receta
      receta => {
        this.recetas.push(receta); // Agrega la nueva receta a la lista localmente
        this.nuevaReceta = { // Reinicia el objeto para la nueva receta
          id: 0,
          nombre: '',
          descripcion: '',
          lugar_de_creacion: '',
          precio: ''
        };
        this.nuevaRecetaVisible = false; // Oculta el formulario para agregar una nueva receta
      }
    );
  }
}
