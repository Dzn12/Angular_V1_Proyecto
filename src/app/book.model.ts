// app/book.model.ts
export class Book {
    title: string = '';
    author: string = '';
    description: string = '';
  
    constructor(title: string = '', author: string = '', description: string = '') {
      this.title = title;
      this.author = author;
      this.description = description;
    }
  }
  