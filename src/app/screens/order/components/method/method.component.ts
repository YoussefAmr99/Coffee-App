import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-method',
  standalone: false,
  templateUrl: './method.component.html',
  styleUrl: './method.component.scss',
})
export class MethodComponent {
  @Input() totalPrice!: number;
  @Output() onOrderClick = new EventEmitter<void>();

  onOrder(): void {
    this.onOrderClick.emit();
  }
}
