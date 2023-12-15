import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private selectedCitySource = new BehaviorSubject<string>('');
  selectedCity$ = this.selectedCitySource.asObservable();

  constructor() { }

  setCity(city: string) {
    this.selectedCitySource.next(city);
  }
}
