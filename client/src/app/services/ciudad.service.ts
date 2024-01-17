import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private selectedCitySource = new BehaviorSubject<string>('');
  private selectedIdCitySource = new BehaviorSubject<string>('');
  selectedCity$ = this.selectedCitySource.asObservable();
  selectedIdCity$ = this.selectedIdCitySource.asObservable();

  constructor() { }

  setCity(city: string) {
    this.selectedCitySource.next(city);
  }

  setIdCity(city: string) {
    this.selectedIdCitySource.next(city);
  }
}
