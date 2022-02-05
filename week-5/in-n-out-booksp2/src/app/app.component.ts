/**
 * Title: app.component.ts
 * Author: Lucas Hoffman
 * Date: Feb 4, 2022
 * Description: app.component.ts file for in-n-out-books
 */

 import { Component } from '@angular/core';

 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
 })
 export class AppComponent {
   assignment: string;

   constructor() {
     this.assignment = 'Exercise 5.3 - Data Tables';
   }
 }
