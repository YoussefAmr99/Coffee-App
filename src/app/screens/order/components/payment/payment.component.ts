import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-payment',
  standalone: false,
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent implements OnInit {
  @Input() type!: string;
  @Input() deliveryFee?: number;
  @Output() totalFees = new EventEmitter<number>();

  cartTotalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartTotalPrice().subscribe((total) => {
      this.cartTotalPrice = total;
      this.totalFees.emit(this.cartTotalPrice);
    });
  }
}
