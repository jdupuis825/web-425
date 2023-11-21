// Name: Jocelyn Dupuis
// File: app.component.ts
// Date: 11/16/2023
// Description: TS file for books service

//import statements
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//exports
export class BooksService {
  // array of book items
  books: Array<IBook>;

  //array of book items within constructor
  constructor() {
    this.books = this.books = [
      {
        isbn: '9788293326564',
        title: 'Walkin After Midnight',
        description: 'Crime Stories',
        numOfPages: 205,
        authors: ['Joe Ricker']
      },
      {
        isbn: '1643960865',
        title: 'Some Awful Cunning',
        description: 'A Crime Thriller',
        numOfPages: 294,
        authors: ['Joe Ricker']
      },
      {
        isbn: '1643962329',
        title: 'All The Good In Evil',
        description: 'Amos "Moss" Swain is haunted by broken promises..',
        numOfPages: 304,
        authors: ['Joe Ricker']
      },
      {
        isbn: '1643961330',
        title: 'Porcelain Moths',
        description: 'Maggie Remick has a secret',
        numOfPages: 217,
        authors: ['Joe Ricker']
      },
      {
        isbn: '0393024393',
        title: 'A Clockwork Orange',
        description: 'Set in a dismal dystopian England, it is the first-person account of a juvenile delinquent who undergoes state-sponsored psychological rehabilitation for his aberrant behavior.',
        numOfPages: 192,
        authors: ['Anthony Burgess']
      }
    ]
   }
   // returns an observable array of IBooks
   getBooks(): Observable<IBook[]> {
      return of(this.books);
   }
   // excepts an isbn number and if matches whats passed in will return that book
   getBook(isbn: string): IBook {
      for (let book of this.books) {
        if (book.isbn === isbn) {
          return book;
        }
      }
   }
}
