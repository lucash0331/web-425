/**
 * Title: composer.class.ts
 * Author: Lucas Hoffman
 * Date: January 19, 2022
 * Description: composer.class.ts file for assignment 3.2
 */

import { IComposer } from './composer.interface';
export class Composer {
  composers: Array<IComposer>;


  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Aaron Copland", genre: "Folk"
      },

      {
        composerId: 101, fullName: "Alvin Rahman", genre: "Electronic"
      },

      {
        composerId: 102, fullName: "Bix Beiderbecke", genre: "Jazz"
      },

      {
        composerId: 103, fullName: "Brian Taylor", genre: "Classical"
      },

      {
        composerId: 104, fullName: "Claudio Porter", genre: "Vocal"
      },
    ]
  }

  // Create function getComposers will return composers of the 5 composers
  getComposers() {
    return this.composers;
  }

  // Gets composer id using loops
  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }

    return {} as IComposer;
  }
}
