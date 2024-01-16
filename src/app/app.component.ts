import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'Angular_V1_Proyecto';
  allBooks: Book[] = [];
  specificBook: Book | null = null;
  booksByAuthor: Book[] = [];
  noBooksFound: boolean = false;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getAllBooks();
    this.getSpecificBook();
    this.getBooksByAuthor();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe(
      (data: Book[]) => {
        this.allBooks = data;
        if (data.length === 0) {
          this.noBooksFound = true;
        }
      },
      (error) => {
        console.error('Error retrieving all books:', error);
        this.noBooksFound = true;
      }
    );
  }

  getSpecificBook() {
    this.bookService.getBooksFromSymfony().subscribe(
      (data: Book[]) => {
        if (data.length > 0) {
          this.specificBook = data[0];
        } else {
          this.noBooksFound = true;
        }
      },
      (error) => {
        console.error('Error retrieving specific book:', error);
        this.noBooksFound = true;
      }
    );
  }



  getBooksByAuthor() {
    const authorName = 'Homero'; // Nombre del autor a buscar
    this.bookService.getAutorFromSymfony(authorName).subscribe(
      (data: Book[]) => {
        this.booksByAuthor = data;
        if (data.length === 0) {
          this.noBooksFound = true;
        }
      },
      (error) => {
        console.error(`Error retrieving books by author ${authorName}:`, error);
        this.noBooksFound = true;
      }
    );
  }
  
  


  
}
