import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent implements OnInit {

  public eventCount: number;

  constructor() { }

  ngOnInit() {
    this.eventCount = 0;
    this.gameContinue();
  }

  public typeWriter(text, speed: number = 50, i: number = 0) {
    if (i === 0) {
      document.getElementById('blinker').insertAdjacentHTML('beforebegin', '<br>');
    }
    if (i < text.length) {
      setTimeout(() => {
        document.getElementById('blinker').insertAdjacentHTML('beforebegin', text.charAt(i));
        i++;
        this.typeWriter(text, speed, i);
      }, speed);
    }
  }

  public gameContinue() {
    this.eventCount++;
    switch (this.eventCount) {
      case 1: {
        this.typeWriter(`When I first moved into the apartment`);
        break;
      }
      case 2: {
        this.typeWriter(`Well, let's go back a little bit`);
        break;
      }
    }
  }

}
