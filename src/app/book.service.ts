import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // Importa 'of' desde 'rxjs'
import { Book } from './book.model';
import { map, catchError } from 'rxjs/operators'; // Importa 'map' y 'catchError' desde 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://172.18.4.105:8000'; // URL base de tu API en Symfony

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/obra/`).pipe(
      catchError(error => {
        console.error('Error al obtener los libros:', error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }

  getBooksFromSymfony(): Observable<Book[]> {
    return this.http.get<Book>(`${this.apiUrl}/obra/1984`).pipe(
      // Usa 'map' para convertir el objeto de libro en un array con un solo elemento
      map((singleBook: Book) => [singleBook]),
      catchError(error => {
        console.error('Error al obtener el libro:', error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }

  getAutorFromSymfony(author: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/obra/autor/Homero`).pipe(
      catchError(error => {
        console.error(`Error al obtener libros del autor ${author}:`, error);
        return of([]); // Devuelve un array vacío en caso de error
      })
    );
  }
}

