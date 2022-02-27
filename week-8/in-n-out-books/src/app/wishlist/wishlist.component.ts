/*
; Title: wishlist.component.ts
; Author: Lucas Hoffman
; Date: February 12, 2022
; Description: wishlist.component.ts file for in-n-out-booksp4
*/

import { Component, OnInit } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  items: Array<IWishListItem> = [];

  constructor() {}

  ngOnInit(): void {}

  updateItemsHandler(item: IWishListItem) {
    //Push item to items array
    this.items.push(item);
  }
}
