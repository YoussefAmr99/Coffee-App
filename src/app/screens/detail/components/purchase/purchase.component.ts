import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-purchase',
  standalone: false,
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss',
})
export class PurchaseComponent implements OnInit {
  @Input() productPrice: number | undefined;
  @Input() quantity!: number;
  @Output() onBuyNow = new EventEmitter<void>();
  @Output() plusOne = new EventEmitter<void>();
  @Output() minusOne = new EventEmitter<void>();

  inCart: boolean = false;
  ngOnInit(): void {
    if (this.quantity) {
      this.inCart = true;
    }
  }
  onBuyNowClick(): void {
    this.onBuyNow.emit();
    this.inCart = true;
    this.quantity = 1;
  }
  addToCart(): void {
    this.quantity++;
    this.plusOne.emit();
  }
  removeItem(): void {
    this.inCart = false;
    this.removeFromCart();
  }
  removeFromCart(): void {
    this.quantity--;
    this.minusOne.emit();
  }
}
