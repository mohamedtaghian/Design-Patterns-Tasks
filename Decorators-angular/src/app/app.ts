import { Component } from '@angular/core';
import { MeasureTime } from './decorators/measure-time.decorator';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  @MeasureTime()
  async loadData() {
    return new Promise((resolve) => setTimeout(resolve, 1500));
  }

  @MeasureTime()
  runCalculation() {
    let count = 0;
    for (let i = 0; i < 1000000; i++) {
      count += i;
    }
    return count;
  }
}
