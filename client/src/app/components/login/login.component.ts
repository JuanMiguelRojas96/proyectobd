import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from "@angular/router";
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:string = '';
  password:string = '';

  constructor( private apiService:ApiService, private router:Router){}

  login(){
    const user = {email: this.email,password:this.password};
    this.apiService.login(user).subscribe(data=>{
      this.apiService.setToken(data.token);
      this.apiService.setClientData(data.clientData);
      this.router.navigateByUrl('home');
      console.log(data);
    });
    (error: any) => {
      console.log(error);
    };
  }
  obtenerToken() {
    const tokenObject = this.apiService.getToken();
    const clientDataObject = this.apiService.getClientData();
    console.log(tokenObject);
    console.log(clientDataObject);

  }



}
