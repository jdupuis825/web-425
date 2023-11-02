// Name: Jocelyn Dupuis
// File: signin.component.ts
// Date: 11/01/2023
// Description: signin component - Exercise 3.3

//imports
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // variable of type boolean assigned false value
  isLoggedIn = false;

  // add angular built in router
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // sign in function
  signin() {
    //update variable to be true
    this.isLoggedIn = true;

    // navigates user to home component
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}})
  }
}
