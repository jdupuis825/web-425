//Name: Jocelyn Dupuis
//File: base-layout.components.ts
//Date: 11/21/2023
//Description: TS file for base-layout components

//import statements
import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts'
  }

  ngOnInit(): void {
  }

}
