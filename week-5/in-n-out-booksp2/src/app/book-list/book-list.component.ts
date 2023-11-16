// Name: Jocelyn Dupuis
// File: book-list.component.ts
// Date: 11/16/2023
// Description: TS file for book-list components

// import statements
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
//export
export class BookListComponent implements OnInit {
  // variables created
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  //add BooksService to constructor and use dependency injection to access books service
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }
  // call and map to the return object to the book variable
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    //to test service is returning the correct book
    console.log(this.book);
  }

}
