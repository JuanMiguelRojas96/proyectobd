import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from "@angular/router";

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
      this.apiService.setToken(data.clientData);
      this.router.navigateByUrl('home');
      console.log(data);
    });
    (error: any) => {
      console.log(error);
    };
  }
  obtenerToken(){
    console.log(this.apiService.getToken());
  }

}
