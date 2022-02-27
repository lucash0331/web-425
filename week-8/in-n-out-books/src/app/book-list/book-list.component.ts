/**
 * Title: book-list.component.ts
 * Author: Lucas Hoffman
 * Date: Feb 26, 2022
 * Description: book-list.component.s file for in-n-out-books
 */

 import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
 import { MatDialog } from '@angular/material/dialog';
 import { BooksService } from '../books.service';
 import { IBook } from '../book.interface';
 import { Observable } from 'rxjs';
 import { Component, OnInit } from '@angular/core';

 @Component({
   selector: 'app-book-list',
   templateUrl: './book-list.component.html',
   styleUrls: ['./book-list.component.scss'],
 })
 export class BookListComponent implements OnInit {
   book!: IBook;
   books: Array<IBook> = [];

   constructor(private booksService: BooksService, private dialog: MatDialog) {
     this.booksService.getBooks().subscribe((res) => {
       for (let key in res) {
         if (res.hasOwnProperty(key)) {
           let authors = [];
           if (res[key].details.authors) {
             authors = res[key].details.authors.map(function (author) {
               return author.name;
             });
           }

           this.books.push({
             isbn: res[key].details.isbn_13
               ? res[key].details.isbn_13
               : res[key].details.isbn_10,
             title: res[key].details.title,
             description: res[key].details.subtitle
               ? res[key].details.subtitle
               : 'N/A',
             numOfPages: res[key].details.number_of_pages,
             authors: authors,
           });
         }
       }
     });
   }

   ngOnInit(): void {}

   // showBookDetails function
   showBookDetails(isbn: string) {
     this.book = this.books.find((book) => book.isbn === isbn);

     const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
       data: { book: this.book },
       disableClose: true,
       width: '800px',
     });

     dialogRef.afterClosed().subscribe((result) => {
       if (result === 'confirm') {
         this.book = null;
       }
     });
   }
 }
