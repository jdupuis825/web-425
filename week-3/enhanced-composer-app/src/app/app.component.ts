// Name: Jocelyn Dupuis
// File: app.components.ts
// Date: 11/01/2023
// Description: app component

// imports
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// exports
export class AppComponent {
  // updated for new assignment
  assignment: string = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
