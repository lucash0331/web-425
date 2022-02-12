/*
; Title: wishlist-create.component.ts
; Author: Lucas Hoffman
; Date: February 12, 2022
; Description: wishlist-create.component.ts
*/

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
})
export class WishlistCreateComponent implements OnInit {
  @Output() addItemEmitter = new EventEmitter<IWishListItem>();

  item: IWishListItem;

  constructor() {
    this.item = {} as IWishListItem;
  }

  ngOnInit(): void {}

  addItem() {
    //Emit the user input for title and author
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });

    //Reset to blank object literal
    this.item = {} as IWishListItem;
  }
}
