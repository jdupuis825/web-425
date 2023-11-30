//Name: Jocelyn Dupuis
//File: base-layout.components.ts
//Date: 11/30/2023
//Description: TS file for base-layout components

//import statements
import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
//exports
export class BaseLayoutComponent implements OnInit {

  //string variable created
  assignment: string;

  //update with assignment name
  constructor(private cookieService: CookieService, private router: Router) {
    //update with assignment name
    this.assignment = 'GPA Calculator'
  }

  ngOnInit(): void {
  }

  //function that allows user to sign out of application
  signOut() {
    //deletes cookies
    this.cookieService.deleteAll();
    //takes user back to sign in screen
    this.router.navigate(['/session/sign-in']);
  }
}
