import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../services/cart/cart.service';
import { SharedService } from '../../../services/shared/shared.service';

@Component({
  selector: 'app-delivery',
  standalone: false,
  templateUrl: './deliveryPage.component.html',
  styleUrl: './deliveryPage.component.scss',
})
export class DeliveryPageComponent {
  constructor(
    private router: Router,
    private cartService: CartService,
    private sharedService: SharedService
  ) {}
  goBack(): void {
    this.cartService.clearCart();
    this.sharedService.clearNote();
    this.router.navigateByUrl('home');
  }
}
