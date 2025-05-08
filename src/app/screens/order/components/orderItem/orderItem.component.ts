import { Component, ElementRef, Input } from '@angular/core';
import { Product } from '../../../../shared/interfaces/product';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-order-item',
  standalone: false,
  templateUrl: './orderItem.component.html',
  styleUrl: './orderItem.component.scss',
})
export class OrderItemComponent {
  constructor(
    private host: ElementRef<HTMLElement>,
    private cartService: CartService
  ) {}
  @Input() product!: Product;
  @Input() quantity!: number;
  @Input() removeCount: boolean = false;

  removeItem(): void {
    this.removeFromCart();
    this.host.nativeElement.remove();
  }

  addToCart(): void {
    this.cartService.addToCart(this.product.id);
  }
  removeFromCart(): void {
    this.cartService.removeFromCart(this.product.id);
  }
}
