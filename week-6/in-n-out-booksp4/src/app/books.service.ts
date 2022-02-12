/**
 * Title: books.service.ts
 * Author: Lucas Hoffman
 * Date: Feb 4, 2022
 * Description: books.service.ts file for in-n-out-booksp2
 */


 import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
 import { of } from 'rxjs';
 import { map } from 'rxjs/operators';
 import { IBook } from './book.interface';

 @Injectable({
   providedIn: 'root',
 })
 export class BooksService {
   books: Array<IBook>;
   constructor() {
     this.books = [
       {
         isbn: '1458963254789',
         title: 'Animal Spirit',
         description:
           'The childhood friend claims the man is one of the rare few people in possession of a guardian animal spirit. Its widely known these exist and rituals are held on a near weekly basis to connect with these guardian spirits, now its time to be the center of that ritual. Certain of the truth in this situation and of this childhood friend, the man hesitantly agrees to the proposal, but theres no time to waste, a decision had to be made quickly.',
         numOfPages: 856,
         authors: ['Kobe Bryant'],
       },
       {
         isbn: '5876325478965',
         title: 'The Moving Man',
         description:
           'The childhood friend claims the teenage boy is now the citizen of a different country. The old country has just been taken over by an enemy force, everybody who wishes to leave this new nation has 3 days to do so. Believing both the situation and this childhood friend, the teenage boy tentatively agrees to the proposal, no matter what, something has to be done in this situation, hopefully this was the right choice.',
         numOfPages: 642,
         authors: ['Donald Trump'],
       },
       {
         isbn: '2654796325478',
         title: 'Hectic Life',
         description:
           'The strange boy claims the woman has a DNA strain which very likely offers the key to cure several crippling diseases. Tests will have to be done, but the key to save millions of lives is within the grasp of science through this DNA strain. Suspicious of this situation, but somewhat trusting of this strange boy, the woman cautiously agrees to the proposal, no matter what, something has to be done in this situation, hopefully this was the right choice.',
         numOfPages: 909,
         authors: ['George Washington'],
       },
       {
         isbn: '4789874569893',
         title: 'Nonchalant Life',
         description:
           'What if this strange girl is not speaking the truth. Or what if all this is an elaborate trap. How could an ordinary teenage boy be relied upon in something this big. Only one way to find out.',
         numOfPages: 460,
         authors: ['James Mattis'],
       },
       {
         isbn: '666969658745256',
         title: 'Who Shall Enter',
         description:
           'What if this strange woman is a con artist. Or what if the situation is worse than it appears. How could an ordinary girl play a part in all this. Either way, the choice has been made.',
         numOfPages: 473,
         authors: ['Ben Simmons'],
       },
     ];
   }

   //Function to get Books
   getBooks(): Observable<IBook[]> {
     return of(this.books);
   }

   //Function to get Book by ISBN
   getBook(isbn: string): IBook {
     for (let book of this.books) {
       if (book.isbn === isbn) {
         return book;
       }
     }
     return {} as IBook;
   }
 }
