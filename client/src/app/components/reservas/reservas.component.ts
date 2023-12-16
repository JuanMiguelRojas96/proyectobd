import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit {

  movie: any = {};

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const movieId = params['id'];
      this.apiService.getPelicula(movieId).subscribe(movie => {
        this.movie = movie;
      });
    });
  }

}
