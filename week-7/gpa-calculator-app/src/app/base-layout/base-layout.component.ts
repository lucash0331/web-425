/*
; Title: base-layout.component.ts
; Author: Lucas Hoffman
; Date: February 18, 2022
; Description: base-layout.component file for gpa-calculator-app3
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator';
  }

  ngOnInit(): void {}

  //Sign-Out Function
  signOut() {
    this.cookieService.deleteAll();
    //Returns user to Sign-In Route
    this.router.navigate(['/session/sign-in']);
  }
}
