import { Component } from '@angular/core';

@Component({
  selector: 'app-driver',
  standalone: false,
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss',
})
export class DriverComponent {
  isMobile(): boolean {
    return /iPhone/i.test(navigator.userAgent);
  }
  onCall(): void {
    if (this.isMobile()) window.location.href = 'tel.+201289055490';
    else alert('this feature is only available on mobile devices.');
  }
}
