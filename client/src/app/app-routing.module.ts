import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCityComponent } from './components/card-city/card-city.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MoviesComponent } from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import { ReservasComponent } from './components/reservas/reservas.component';

const routes: Routes = [
  {path:'home', component:CardCityComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'movies',component:MoviesComponent},
  {path: 'movie/:id',component:MovieComponent},
  {path: 'reserva/:id', component:ReservasComponent},
  {path:'', redirectTo:'/home',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
