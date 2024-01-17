import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn()); // Inicializar con el estado actual
  clientData$ = new BehaviorSubject<any>(this.getClientData());

  constructor(private http: HttpClient, private cookies:CookieService, private router:Router) {}
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

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token; // Devolverá true si existe un token y false si no existe
  }

  setToken(token: string) {
    this.cookies.set("token", token);
    this.isLoggedIn$.next(true);
  }

  setClientData(clientData: object) {
    this.cookies.set("clientData", JSON.stringify(clientData));
    this.clientData$.next(clientData);
  }
  getToken() {
    return this.cookies.get("token");
  }

  logout(): void {
    this.cookies.delete('token');
    this.cookies.delete('clientData');
    this.router.navigateByUrl('/login');
    this.isLoggedIn$.next(false); // Actualiza el estado de isLoggedIn$ a false al cerrar sesión
    this.clientData$.next(null);
  }

  getClientData() {
    const clientDataString = this.cookies.get("clientData");
    return clientDataString ? JSON.parse(clientDataString) : null;
  }


}
