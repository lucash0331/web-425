/**
 * Title: app.routing.ts
 * Author: Lucas Hoffman
 * Date: January 21, 2022
 * Description: routing ts file for app.routing file
 */

// Import statements
import { Routes } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';


// Export statements
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard],
  },
];
