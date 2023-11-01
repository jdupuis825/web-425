// Name: Jocelyn Dupuis
// File: composer-list.components.ts
// Date: 11/01/2023
// Description: composer list component file for list of composers

// imports
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // composer variable
  composers: Array<IComposer>;


  // components constructor
  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
