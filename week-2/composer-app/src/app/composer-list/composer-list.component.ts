// Name: Jocelyn Dupuis
// File: composer-list.components.ts
// Date: 10/26/2023
// Description: composer list component file for list of composers

// import
import { Component, OnInit } from '@angular/core';

// export class
export default class Composer {
  fullName: string;
  genre: string;

  // accept two parameters
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // add variable
  composers: Array<Composer>;

  // initialize 5 new composer objects
  constructor() {
    this.composers = [
      new Composer("Frédéric Chopin", "Romantic"),
      new Composer("Johannes Brahms", "Romantic"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer ("Pyotr IIyich Tchaikovsky", "Romantic")
    ]
  }

  ngOnInit(): void {
  }

}
