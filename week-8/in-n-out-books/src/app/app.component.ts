/**
 * Title: app.component.ts
 * Author: Lucas Hoffman
 * Date: Feb 26, 2022
 * Description: app.component.ts file for in-n-out-books
 */

 import { Component } from '@angular/core';

 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
 })
 export class AppComponent {
   title(title: any) {
     throw new Error('Method not implemented.');
   }
   assignment: string;

   constructor() {
     this.assignment = 'Welcome to In-N-Out-Books';
   }
 }
