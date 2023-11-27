//Name: Jocelyn Dupuis
//File: grade-summary.components.ts
//Date: 11/22/2023
//Description: TS file for grade summary component

//import statements
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
//exports
export class GradeSummaryComponent implements OnInit {
  //input values for grade and course added with type string
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
