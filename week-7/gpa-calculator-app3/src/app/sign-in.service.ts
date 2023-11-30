//Name: Jocelyn Dupuis
//File: app.module.ts
//Date: 11/30/2023
//Description: TS file for sign-in service

//import statements
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//exports
export class SignInService {
  //variable added
  studentIds: Array<number>;

  constructor() {
    //array with student Id values
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }
  //function created to iterate over student Ids array
  //returns true if match found, returns false if no matches found
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
