import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../shared/interfaces/product';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './orderPage.component.html',
  styleUrl: './orderPage.component.scss',
})
export class OrderPageComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  items: { product: Product; quantity: number }[] = [];
  deliveryType: string = 'Delivery';
  deliveryFees: number = 1;
  totalFees: number = 0;

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.items = [];
      cart.forEach((cartItem) => {
        this.productService
          .getProductById(cartItem.productId)
          .subscribe((res) => {
            this.items.push({ product: res, quantity: cartItem.quantity });
          });
      });
    });
  }
  onSelectDeliveryType(type: string): void {
    this.deliveryType = type;
    if (this.deliveryType === 'Delivery') {
      this.deliveryFees = 1;
      this.totalFees += this.deliveryFees;
    } else {
      this.totalFees -= this.deliveryFees;
      this.deliveryFees = 0;
    }
  }
  cartTotalFees(fees: number): void {
    this.totalFees = fees + this.deliveryFees;
  }

  goToDelivery(): void {
    if (this.totalFees > 1) this.router.navigateByUrl('delivery');
    else alert('Cart is empty!');
  }
  onSaveNote(note: string): void {
    this.sharedService.addNote(note);
  }
}
