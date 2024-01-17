import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CiudadService } from '../../services/ciudad.service';

@Component({
  selector: 'app-card-city',
  templateUrl: './card-city.component.html',
  styleUrl: './card-city.component.css'
})
export class CardCityComponent implements OnInit{

  ciudades: any; // Variable para almacenar los datos de las ciudades

  constructor(private apiService: ApiService, private ciudadService:CiudadService) {}

  @Output() ciudadSeleccionada = new EventEmitter<string>();
  @Output() idCiudadSeleccionada = new EventEmitter<string>();

  ngOnInit() {
    this.obtenerCiudades();
  }
  obtenerCiudades() {
    this.apiService.obtenerCiudades().subscribe((data: any) => {
      this.ciudades = data; // Almacena los datos de las ciudades en la variable 'ciudades'
    });
  }

  seleccionarCiudad(ciudadSeleccionada:string){
    this.ciudadService.setCity(ciudadSeleccionada);
    console.log(ciudadSeleccionada);
  }

  seleccionarIdCiudad(ciudadSeleccionada:string){
    this.ciudadService.setIdCity(ciudadSeleccionada);
    console.log(ciudadSeleccionada);
  }

}
