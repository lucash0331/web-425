/**
 * Title: Composer.service.ts
 * Author: Lucas Hoffman
 * Date: January 26, 2022
 * Description: composer.service.tx file
 */


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

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
