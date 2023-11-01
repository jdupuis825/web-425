// Name: Jocelyn Dupuis
// File: home.component.ts
// Date: 11/01/2023
// Description: home component - Exercise 3.3

//imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// create home component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// exports home component class
export class HomeComponent implements OnInit {

  // Variable defined with Boolean data type
  isLoggedIn: Boolean;

  // ActivatedRoute object added to components constructor
  constructor(private route: ActivatedRoute) {
    // assign this isLoggedIn variable the value being passed from signin.component
    // using angular built in queryParamMap function
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
