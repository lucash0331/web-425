/*
; Title: gpa.component.ts
; Author: Lucas Hoffman
; Date: February 12, 2022
; Description: gpa.component.ts file for gpa-calculator-app2
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss'],
})
export class GpaComponent implements OnInit {
  @Input()
  gpaTotal!: number;

  constructor() {}

  ngOnInit(): void {}
}
