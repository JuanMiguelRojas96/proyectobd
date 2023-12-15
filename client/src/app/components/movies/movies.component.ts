import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CiudadService } from '../../services/ciudad.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{

  
  private subscription: Subscription = new Subscription;
  selectedCity: string = '';
  peliculas: any;

  constructor(private apiService: ApiService, private ciudadService: CiudadService, private router : Router){}

  ngOnInit(): void {
    this.obtenerPelicula();
    this.subscription = this.ciudadService.selectedCity$.subscribe(city =>{
      this.selectedCity = city;
    })
    if(this.selectedCity == ''){
      this.redireccionar();
      this.mostrarVentanaEmergente();
    }

  }

  obtenerPelicula() {
    this.apiService.obtenerPeliculas().subscribe((data: any) => {
      this.peliculas = data; // Almacena los datos de las ciudades en la variable 'peliculas'
    });
  }

  redireccionar() {
    this.router.navigate(['/home']); // Redirige a la página deseada si selectedCity está vacío
  }

  mostrarVentanaEmergente() {
    window.alert('¡Por favor selecciona una ciudad!'); // Muestra la ventana emergente si selectedCity está vacío
  }

}
