import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string ='';
  name:string = '';
  password:string = '';
  phone:string = '';
  passwordRepeat:string= '';
  passwordMisMatch = true;
  passwordMisLength = true;

  constructor(private apiService:ApiService){}

  registeUser() {
    const user = {password:this.password, name: this.name, email: this.email, phone: this.phone};
    this.apiService.registrarCliente(user).subscribe(data =>{
      console.log(data);
    })
  }

  onPasswordInput() {
    if (this.password === '' || this.passwordRepeat === '') {
      this.passwordMisMatch = true;
    }else {
      this.passwordMisMatch = this.password !== this.passwordRepeat;
    }  
  }
  onPasswordLength() {
    if (this.password.length < 8){
      this.passwordMisLength = true;
    } else{
      this.passwordMisLength = false;
    }
  }


  


}
