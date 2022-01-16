import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    (this.fullName = fullName), (this.genre = genre);
  }

  toString() {
    console.log(`/n full name: ${this.fullName} /n ${this.genre}`);
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Aaron Copland', 'Folk'),
      new Composer('Alvin Rahman', 'Electronic'),
      new Composer('Bix Beiderbecke', 'Jazz'),
      new Composer('Brian Taylor', 'Classical'),
      new Composer('Claudio Porter', 'Vocal'),
    ];
  }

  ngOnInit(): void {}
}
