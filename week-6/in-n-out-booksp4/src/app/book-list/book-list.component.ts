// Name: Jocelyn Dupuis
// File: book-list.component.ts
// Date: 11/16/2023
// Description: TS file for book-list components

// import statements
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


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
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }
  // call and map to the return object to the book variable
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    //create dialogRef object assigned to dialog.open function
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      //object literal and nested object literal assigned to book variable (match current book)
      data: {
        book: this.book
      },
      //disable set to true with width of 800px
      disableClose: true,
      width: '800px'
    })

    //to test service is returning the correct book
    console.log(this.book);

    //dialog box closed will reset book value to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }

}
