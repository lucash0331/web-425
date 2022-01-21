/**
 * Title: app.routing.ts
 * Author: Lucas Hoffman
 * Date: January 21, 2022
 * Description: routing ts file for app.routing file
 */

// Import statements
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

// Export statements
export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },

  {
    path: 'home',
    component: HomeComponent
  }
]
