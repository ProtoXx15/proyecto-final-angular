import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DogsComponent } from './pages/dogs/dogs.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'github', component: GithubComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'server', component: UsuariosComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
