/*
; Title: home.component.ts
; Author: Lucas Hoffman
; Date: February 12, 2022
; Description: home.component.ts file for gpa-calculator-app2
*/

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transcriptEntry: ITranscript;
  //Value string with grade values
  selectableGrades: Array<string> = [
    'A',
    'A-',
    'B',
    'B+',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];

  transcriptEntries: Array<ITranscript> = [];

  //gpaTotal number type and set initial value to zero
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {}
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  calculateResults() {
    let gpa: number = 0;

    //For loop and iterate over the transcriptEntries array
    for (let entry of this.transcriptEntries) {
      switch (entry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.0;
          break;
        case 'B-':
          gpa += 2.7;
          break;
        case 'C+':
          gpa += 2.3;
          break;
        case 'C':
          gpa += 2.0;
          break;
        case 'C-':
          gpa += 1.7;
          break;
        case 'D+':
          gpa += 1.3;
          break;
        case 'D':
          gpa += 1.0;
          break;
        case 'D-':
          gpa += 0.7;
          break;
        case 'F':
          gpa += 0.0;
          break;
        default:
          gpa += 0.0;
          break;
      }
    }
    //Divide GPA against transcriptEntries.length, assign to gpaTotal variable
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
    //Create an empty array for this.transcriptEntries, this will clear the selection/gpaTotal
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
