/**
 * Title: signin.components.ts
 * Author: Lucas Hoffman
 * Date: January 21, 2022
 * Description: ts file for signin component
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
