import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EdilesComponent } from './components/ediles/ediles.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ResolucionesComponent } from './components/resoluciones/resoluciones.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Servicios
import { EdilesService, Edil } from './services/ediles.service';


// Rutas
import { ROUTES } from './app.routes';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EdilesComponent,
    UbicacionComponent,
    ResolucionesComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
    EdilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
