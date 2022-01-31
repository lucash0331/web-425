/**
 * Title: Composer.service.ts
 * Author: Lucas Hoffman
 * Date: January 30, 2022
 * Description: composer.service.ts file
 */


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  // Array for composers
  composers: Array<IComposer>;


  // Constructor containng the composers ID, name & genre
  constructor() {
    this.composers = [
      { composerId: 100, fullName: 'Aaron Copland', genre: 'Flok' },
      { composerId: 101, fullName: 'Alvin Rahman', genre: 'Electronic' },
      { composerId: 102, fullName: 'Bix Beiderbecke', genre: 'Jazz' },
      { composerId: 103, fullName: 'Brian Taylor', genre: 'Classical' },
      { composerId: 104, fullName: 'Claudio Porter', genre: 'Vocal' },
    ];
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLowerCase().indexOf(name) > -1
        )
      )
    );
  }

  //Create getComposers function
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
