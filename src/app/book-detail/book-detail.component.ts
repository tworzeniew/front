import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../mainModule/main-component/book';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  @Input() book: Book | null;
  @Output() updatedBook = new EventEmitter<{ title: string; author: string }>();
  constructor() {
    this.book = null;
  }
  onUpdateBook(data: { title: string; author: string }): void {
    if (this.book) {
      this.updatedBook.emit(data);
      this.book = null;
    }
  }
}
