// Name: Jocelyn Dupuis
// File: app.component.ts
// Date: 11/16/2023
// Description: TS file for app components

//import statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//exports
export class AppComponent {

  //variable created for assignment name
  assignment: string;

  constructor() {
    this.assignment = 'Assignment 5.4 - Dialogs';
  }

}
