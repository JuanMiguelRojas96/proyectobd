import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private cookies:CookieService) { }
  obtenerCiudades() {
    return this.http.get('http://localhost:3001/cinefilos/city');
  }
  obtenerPeliculas(){
    return this.http.get('http://localhost:3001/cinefilos/movie');
  }

  getPelicula(id: string): Observable<any> {
    return this.http.get<any[]>('http://localhost:3001/cinefilos/movie').pipe(
      map(movies => movies.find(movie => movie.id === id))
    );
  }

  registrarCliente(datosCliente: any) :Observable<any> {
    return this.http.post<any>('http://localhost:3001/cinefilos/client',datosCliente);
  }

  login(user: any): Observable<any> {
    return this.http.post('http://localhost:3001/cinefilos/login', user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

}
