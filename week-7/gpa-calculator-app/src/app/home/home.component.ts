//Name: Jocelyn Dupuis
//File: home.components.ts
//Date: 11/30/2023
//Description: TS file for home components

//import statements
import { Component, OnInit } from '@angular/core';

import { ITranscript } from '../transcript.interface';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//exports
export class HomeComponent implements OnInit {

  //variables added

  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    //builds new form group with two form controls: course & grade
    this.transcriptForm = this.fb.group({ course: ['', Validators.required ], grade: ['', Validators.required]});
  }

  //function to return the transcriptForm controls
  get form() {
    return this.transcriptForm.controls;
  }
  //function to submit user entry
  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });
    //resets validation
    event.currentTarget.reset();
  }

  //calculates gpa based on letter grade entry
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade) {
        case 'A':
          console.log('its an a');
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.70;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }

    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
