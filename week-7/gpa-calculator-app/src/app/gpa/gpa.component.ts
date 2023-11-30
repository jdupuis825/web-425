//Name: Jocelyn Dupuis
//File: gpa.components.ts
//Date: 11/22/2023
//Description: TS file for gpa components

//import statements
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  //variable added with umber type
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
