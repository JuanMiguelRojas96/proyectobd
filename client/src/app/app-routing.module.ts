import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCityComponent } from './components/card-city/card-city.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'home', component:CardCityComponent},
  {path: 'login', component:LoginComponent},
  {path:'', redirectTo:'/home',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
