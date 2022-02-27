/**
 * Title: app-routing.module.ts
 * Author: Lucas Hoffman
 * Date: Feb 12, 2022
 * Description: app-routing.module.ts file for in-n-out-books
 */


 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { AboutComponent } from './about/about.component';
 import { BookListComponent } from './book-list/book-list.component';
 import { ContactComponent } from './contact/contact.component';
 import { WishlistComponent } from './wishlist/wishlist.component';

 const routes: Routes = [
   {
     path: '',
     component: BookListComponent,
   },
   {
     path: 'book-list',
     component: BookListComponent,
   },
   {
     path: 'contact',
     component: ContactComponent,
   },
   {
     path: 'about',
     component: AboutComponent,
   },
   {
     path: 'wishlist',
     component: WishlistComponent,
   },
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule {}
