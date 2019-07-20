import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { EdilesComponent } from './components/ediles/ediles.component';
import { ResolucionesComponent } from './components/resoluciones/resoluciones.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';




export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'ubicacion', component: UbicacionComponent },
    { path: 'ediles', component: EdilesComponent},
    { path: 'resoluciones', component: ResolucionesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: SigninComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]