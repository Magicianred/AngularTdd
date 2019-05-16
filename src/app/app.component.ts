import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdd';
  buttonValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  rolls = [];

  onButtonClick(value: number) {
    this.rolls.push(value);
  }
}
