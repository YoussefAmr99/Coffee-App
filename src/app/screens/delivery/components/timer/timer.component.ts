import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: false,
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent implements OnInit {
  userLocation!: string;

  totalTime!: number;
  remainingTime!: number;
  progressParts: boolean[] = [false, false, false, false];
  intervalId: any;

  ngOnInit(): void {
    this.userLocation = localStorage.getItem('userLocation') || '';

    this.totalTime = Math.floor(Math.random() * 5) + 1;
    this.remainingTime = this.totalTime;

    this.intervalId = setInterval(() => {
      this.remainingTime--;

      const elapsed: number = this.totalTime - this.remainingTime;
      const percentage: number = (elapsed / this.totalTime) * 100;

      this.progressParts = [
        percentage >= 25,
        percentage >= 50,
        percentage >= 75,
        percentage >= 100,
      ];

      if (this.remainingTime <= 0) {
        clearInterval(this.intervalId);
      }
    }, 60000);
  }
}
