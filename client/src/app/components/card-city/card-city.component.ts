import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card-city',
  templateUrl: './card-city.component.html',
  styleUrl: './card-city.component.css'
})
export class CardCityComponent implements OnInit{

  ciudades: any; // Variable para almacenar los datos de las ciudades

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.obtenerCiudades();
  }
  obtenerCiudades() {
    this.apiService.obtenerCiudades().subscribe((data: any) => {
      this.ciudades = data; // Almacena los datos de las ciudades en la variable 'ciudades'
    });
  }

}
