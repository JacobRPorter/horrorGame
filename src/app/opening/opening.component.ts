import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent implements OnInit {

  public gamestart: Boolean = false;
  public continue1: Boolean = false;

  constructor() { }

  ngOnInit() {
    this.gamestart = true;
  }


  public gameContinue(event) {
    switch (event) {
      case 1: {
        this.continue1 = true;
        break;
      }
    }

  }

}
