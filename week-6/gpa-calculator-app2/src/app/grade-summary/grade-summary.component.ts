/*
; Title: grade-summary.component.ts
; Author: Lucas Hoffman
; Date: February 12, 2022
; Description: grade-summary.component.ts file for gpa-calculator-app2
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent implements OnInit {
  //Input statements
  //Input statements
  @Input()
  grade!: string;
  @Input()
  course!: string;

  constructor() {}

  ngOnInit(): void {}
}
