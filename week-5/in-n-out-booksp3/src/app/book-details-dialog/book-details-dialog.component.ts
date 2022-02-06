/**
 * Title: book-details-dialog.component.ts
 * Author: Lucas Hoffman
 * Date: Feb 5, 2022
 * Description: book-details-dialog.component.ts file for in-n-out-booksp3
 */

 import { Component, OnInit } from '@angular/core';

//Import statements for MatDialog, Inject and IBook
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss'],
})
export class BookDetailsDialogComponent implements OnInit {
  book: IBook;

  constructor(
    private dialogRef: MatDialogRef<BookDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.book = data.book;
  }

  ngOnInit(): void {}
}
