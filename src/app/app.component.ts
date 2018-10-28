import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'horror adventure';
  public inside = true;
  public eventCount: number;

  constructor() { }

  ngOnInit() {
    this.eventCount = 0;
  }

  public lookOutside() {
    this.inside = false;
  }

  public lookAtComputer() {
    this.inside = true;
    this.gameContinue(true);
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

  public gameContinue(resumedFromPrevious: boolean) {
    if (!resumedFromPrevious) {
      this.eventCount++;
    }
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
