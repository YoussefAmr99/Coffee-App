import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  standalone: false,
  templateUrl: './quantity.component.html',
  styleUrl: './quantity.component.scss',
})
export class QuantityComponent {
  @Input() quantity: number = 1;
  @Output() removeItem = new EventEmitter<void>();
  @Output() plusOne = new EventEmitter<void>();
  @Output() minusOne = new EventEmitter<void>();

  onQuantityChange(action: string): void {
    if (action === 'minus' && this.quantity > 1) {
      this.quantity--;
      this.minusOne.emit();
    } else if (action === 'plus') {
      this.quantity++;
      this.plusOne.emit();
    } else {
      this.removeItem.emit();
    }
  }
}
