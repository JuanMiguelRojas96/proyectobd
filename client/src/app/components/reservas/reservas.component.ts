import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { CiudadService } from '../../services/ciudad.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit {

   private subscription: Subscription = new Subscription;
   selectedCity: string = '';
   movie: any = {};

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private ciudadService: CiudadService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const movieId = params['id'];
      this.apiService.getPelicula(movieId).subscribe(movie => {
        this.movie = movie;
      });
    });
    this.subscription = this.ciudadService.selectedIdCity$.subscribe(city =>{
      this.selectedCity = city;
    })
  }

  
}
