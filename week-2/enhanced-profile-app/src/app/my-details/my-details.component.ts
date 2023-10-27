// Name: Jocelyn Dupuis
// File: my-details.component.ts
// Date: 10/26/2023
// Description: file for my details component


import { Component, OnInit } from '@angular/core';

// TypeScript class named person
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];

  // Person class constructor
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // toString to console.log
  toString() {
    console.log(`\n  Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`);
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  // MyDetailsComponent class constructor
  constructor() {
    // new instance of Person and pass in actual full name/ fav food/ fav color
    this.myProfile = new Person("Jocelyn Dupuis", "Thai, but I love everything!", "Black and pink");
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
