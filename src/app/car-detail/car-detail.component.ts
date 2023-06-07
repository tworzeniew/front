import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../car.service';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {
  @Input() car: Car | null;

  @Output() updatedCar = new EventEmitter<{ brand: string; model: string }>();

  constructor() {
    this.car = null;
  }

  onUpdateCar(data: { brand: string; model: string }): void {
    if (this.car) {
      this.updatedCar.emit(data);
      this.car = null;
    }
  }
}
