// Name: Jocelyn Dupuis
// File: composer.class.ts
// Date: 11/01/2023
// Description: composer class file - Exercise 3.2


//import statement for IComposer
import { IComposer } from './composer.interface';

// export class
export class Composer {
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
