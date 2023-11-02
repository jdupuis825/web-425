// Name: Jocelyn Dupuis
// File: app.component.ts
// Date: 11/01/2023
// Description: app components

// imports
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variable to see if user is logged in and is true
  isLoggedIn: boolean = true;
  // new title variable string
  assignment: string = 'Exercise 3.3 - Passing Data to Routes, Part 2';
}

