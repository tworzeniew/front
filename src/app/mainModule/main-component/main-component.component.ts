import { Component, OnInit } from '@angular/core';
import {Book} from './book';
import { Car, CarService } from '../../car.service';
import { BookDetailComponent } from 'src/app/book-detail/book-detail.component';
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {
  grades: number [] = [5,5,4,3,4,5];
  selectedBook: Book | null;
  selectedCar: Car | null = null;
  cars: Car[] = [];
  books: Book[] = [
    { id: 1, title: 'Harry Potter i Komnata Tajemnic', author: 'J.K.Rowling' },
    { id: 2, title: 'Ostatnie życzenie', author: 'Andrzej Sapkowski' },
    { id: 3, title: 'Władca Pierścieni', author: 'JRR Tolkien' },
    { id: 4, title: 'Przeminęło z wiatrem', author: 'Margaret Mitchell' },
    { id: 5, title: 'Lew, Czarwnica i Stara Szafa', author: 'CS Lewis' },
  ];

  onSelectBook(book: Book): void {
    this.selectedBook = book;
  }

  constructor(private carService: CarService) {
    this.selectedBook = null;
    this.selectedCar = null;
  }

  onUpdateBook(data: { title: string; author: string }): void {
    if (this.selectedBook) {
      this.selectedBook.title = data.title;
      this.selectedBook.author = data.author;
      this.selectedBook = null;
    }
  }
  ngOnInit(): void {
    this.cars = this.carService.getCars();  // Fetch the cars from CarService
  }
  onSelectCar(car: Car): void {
    this.selectedCar = car;
  }

  onUpdateCar(data: { brand: string; model: string }): void {
    if (this.selectedCar) {
      this.selectedCar.brand = data.brand;
      this.selectedCar.model = data.model;
      this.selectedCar = null;
    }
  }
}
