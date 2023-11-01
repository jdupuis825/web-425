// Name: Jocelyn Dupuis
// File: composer-details.components.ts
// Date: 11/01/2023
// Description: composer details component file for list of composers

// imports
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  // variables added
  composerId: number;
  composer: IComposer;

  // constructor to use activated route to access the value in the path of router file
  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
    // to check composerId value
    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
