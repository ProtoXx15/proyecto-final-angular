import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';
import { CameraComponent } from './pages/camera/camera.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'github', component: GithubComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'adivinanza', component: AdivinanzaComponent },
  { path: 'camera', component: CameraComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
