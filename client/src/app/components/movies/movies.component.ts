import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {

  peliculas: any;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.obtenerPelicula();

  }

  obtenerPelicula() {
    this.apiService.obtenerPeliculas().subscribe((data: any) => {
      this.peliculas = data; // Almacena los datos de las ciudades en la variable 'peliculas'
    });
  }


}
