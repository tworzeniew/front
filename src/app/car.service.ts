import { Injectable } from '@angular/core';

export interface Car {
  id: number;
  brand: string;
  model: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'Honda', model: 'Civic' },
    { id: 3, brand: 'Ford', model: 'Mustang' },
    { id: 4, brand: 'BMW', model: '3 Series' },
    { id: 5, brand: 'Audi', model: 'A4' },
  ];

  getCars(): Car[] {
    return this.cars;
  }
}