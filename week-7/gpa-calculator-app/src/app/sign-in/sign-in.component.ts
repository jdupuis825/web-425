//Name: Jocelyn Dupuis
//File: app.module.ts
//Date: 11/30/2023
//Description: TS file for sign-in component

//import statements
import { Component, OnInit } from '@angular/core';

import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  //variables created
  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService,
    private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    //creates new reactive form builder
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required,
      Validators.pattern('^[0-9]*$')])]
    })
  }

  onSubmit(){
    //capture the values from the form
    const formValues = this.signinForm.value;
    //holds student id value
    const studentId = parseInt(formValues.studentId);

    //calls sign in service and checks to see if student id value is valid
    if (this.signinService.validate(studentId)) {
      //if true sets cookie in browser
      this.cookieService.set('session_user', studentId.toString(), 1);
      //routes back to home screen
      this.router.navigate(['/'])
    } else {
      //if id value is not valid populates error message
      this.errorMessage = 'The student ID you entered is invalid, please try again.'
    }
  }
  //returns form controls
  get() {
    return this.signinForm.controls;
  }

}
