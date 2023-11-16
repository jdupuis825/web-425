// Name: Jocelyn Dupuis
// File: app.component.ts
// Date: 11/13/2023
// Description: TS file for app components

//import statements
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // variable created for assignment name
  assignment: string;
  title: any;

  constructor() {
    this.assignment = 'Exercise 5.2 - Navigation and Layout'
  }
}
