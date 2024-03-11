import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';
import { CameraComponent } from './pages/camera/camera.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { RelojMundialComponent } from './pages/reloj/reloj.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';
import { recetasComponent } from './pages/recetas/recetas.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'github', component: GithubComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'adivinanza', component: AdivinanzaComponent },
  { path: 'recetas', component: recetasComponent }, 
  { path: 'reloj', component: RelojMundialComponent },
  { path: 'camera', component: CameraComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
