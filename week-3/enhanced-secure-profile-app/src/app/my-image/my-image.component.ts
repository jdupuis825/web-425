// Name: Jocelyn Dupuis
// File: my-details.component.ts
// Date: 10/26/2023
// Description: TS file for my images component

// import statements
import { Component, OnInit } from '@angular/core';

//component 
@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})

//exports MyImageComponent
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
