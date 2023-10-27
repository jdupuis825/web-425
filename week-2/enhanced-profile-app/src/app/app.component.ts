// Name: Jocelyn Dupuis
// File: app.component.ts
// Date: 10/26/2023
// Description:


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variable defined with Boolean data type
  isLoggedIn: Boolean = true;
  // new title variable string
  assignment: string = 'Exercise 2.3 - Data Binding';
}
