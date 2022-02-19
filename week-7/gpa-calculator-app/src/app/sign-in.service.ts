/*
; Title: sign-in.service.ts
; Author: Lucas Hoffman
; Date: February 18, 2022
; Description: sign-in.service.ts file for gpa-calculator-app3
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  studentIds: Array<number>;

  constructor() {
    //Student Id predetermined values
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  //Function to validate studentId number w predetermined values
  validate(studentId: number) {
    return this.studentIds.some((id) => id === studentId);
  }
}
