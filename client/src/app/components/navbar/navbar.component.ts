import { Component,OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = false;
  clientData:any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });

    this.apiService.clientData$.subscribe((data: any) => {
      this.clientData = data;
    });
  }

  logout(): void {
    this.apiService.logout(); // Llama al método de logout del servicio de autenticación
  }


}
