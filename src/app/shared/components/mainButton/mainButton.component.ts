import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-main-button',
  standalone: false,
  templateUrl: './mainButton.component.html',
  styleUrl: './mainButton.component.scss',
})
export class MainButtonComponent {
  @Input() text!: string;
  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
