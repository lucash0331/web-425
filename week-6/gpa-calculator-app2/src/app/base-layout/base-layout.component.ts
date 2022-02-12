/*
; Title: base-layout.component.ts
; Author: Lucas Hoffman
; Date: February 12, 2022
; Description: base-layout.component file for gpa-calculator-app2
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.4 - Input Properties';
  }

  ngOnInit(): void {}
}
