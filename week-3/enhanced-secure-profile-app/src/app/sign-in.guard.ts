/**
 * Title: sign-in.guard.ts
 * Author: Lucas Hoffman
 * Date: January 23, 2022
 * Description: sign-in.guard file for assignment 3.4
 */


 import { Injectable } from '@angular/core';
 import {
   ActivatedRouteSnapshot,
   CanActivate,
   RouterStateSnapshot,
   UrlTree,
 } from '@angular/router';
 import { Observable } from 'rxjs';
 import { Router } from '@angular/router';

 @Injectable({
   providedIn: 'root',
 })
 export class SignInGuard implements CanActivate {
   constructor(private router: Router) {}

   canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
   ):
     | Observable<boolean | UrlTree>
     | Promise<boolean | UrlTree>
     | boolean
     | UrlTree {
     let isLoggedIn = next.queryParams['isLoggedIn'];

     if (isLoggedIn) {
       return true;
     } else {
       this.router.navigate(['/']);
       return false;
     }
   }
 }
