// Name: Jocelyn Dupuis
// File: composer.service.ts
// Date: 11/07/2023
// Description: composer class file - Exercise 4.2

// import statements
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})

//exports class
export class ComposerService {

  composers: Array<IComposer>;

  // accept parameters
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Frédéric Chopin", genre: "Romantic"
      },
      {
        composerId: 101, fullName: "Johannes Brahms", genre: "Romantic"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Ludwig van Beethoven", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Pyotr IIyich Tchaikovsky", genre: "Romantic"
      }
    ]
  }
  // function to return composers
  getComposers() {
    return this.composers;
  }
  // function to search and return composer
  getComposer(composerId: number) {
    for (let composer of this.composers) {
        if (composer.composerId === composerId) {
            return composer;
        }
    }
  }
}
