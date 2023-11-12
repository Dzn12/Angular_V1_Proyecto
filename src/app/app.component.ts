

// app/book.component.ts
import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular_V1_Proyecto';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
}
