// app/book.service.ts
import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private data: Book[] = [
    new Book('Título del Libro ', 'Autor del Libro 1', 'Descripción del Libro 1'),
    new Book('Título del Libro 2', 'Autor del Libro 2', 'Descripción del Libro 2'),
  ];

  getBooks(): Book[] {
    return this.data;
  }
}
