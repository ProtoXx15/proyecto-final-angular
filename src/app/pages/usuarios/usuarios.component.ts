import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/api.service';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  usuarioForm: FormGroup;
  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) {
    this.usuarioForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      ciudad: ['', Validators.required],
      ocupacion: ['', Validators.required]
    });
  }
  borrarUsuario(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    });
  }
  ngOnInit(): void {
    this.usuarioService.getUsuarios(0, 100).subscribe(data => {
      this.usuarios = data.usuarios;
    });
  }
  insertarUsuario() {
    if (this.usuarioForm.valid) {
      this.usuarioService.createUsuario(this.usuarioForm.value).subscribe(usuario => {
        this.usuarios.push(usuario);
        this.usuarioForm.reset();
      });
    }
  }
}
