import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';

import {ApiService} from './services/api.service'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardCityComponent } from './components/card-city/card-city.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';

import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { ReservasComponent } from './components/reservas/reservas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardCityComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    MovieComponent,
    ReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
