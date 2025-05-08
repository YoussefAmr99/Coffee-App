import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../shared/interfaces/product';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  constructor(private cartService: CartService) {}

  @Input() product!: Product;
  @Output() onProductClick = new EventEmitter<number>();
  quantityChange: boolean = false;
  quantity!: number;

  ngOnInit(): void {
    this.quantity = this.cartService.getQuantity(this.product.id);
    if (this.quantity > 0) {
      this.quantityChange = true;
    }
  }
  onProductSelect(): void {
    this.onProductClick.emit(this.product.id);
  }
  toggleQuantityChange(action: string): void {
    if (action === 'add') {
      this.quantity++;
      this.addToCart();
    } else {
      this.quantity = 0;
      this.removeFromCart();
    }
    this.quantityChange = !this.quantityChange;
  }

  addToCart(): void {
    this.cartService.addToCart(this.product.id);
  }
  removeFromCart(): void {
    this.cartService.removeFromCart(this.product.id);
  }
}
