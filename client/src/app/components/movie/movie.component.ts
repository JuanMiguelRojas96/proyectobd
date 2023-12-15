import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'] // Cambio 'styleUrl' a 'styleUrls'
})
export class MovieComponent implements OnInit {
  movie: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _apiService: ApiService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const movieId = params['id'];
      this._apiService.getPelicula(movieId).subscribe(movie => {
        this.movie = movie;
      });
    });
  }
}