import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/interfaces/product';
import { ProductService } from '../../../services/product/product.service';
import { CartService } from '../../../services/cart/cart.service';
import { LikesService } from '../../../services/likes/likes.service';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detailPage.component.html',
  styleUrl: './detailPage.component.scss',
})
export class DetailPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private likesService: LikesService
  ) {}
  productId!: number;
  item!: Product;
  quantity!: number;
  isLiked!: boolean;

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(this.productId).subscribe((res) => {
      this.item = res;
      this.isLiked = this.likesService.isLiked(this.item);
      this.quantity = this.cartService.getQuantity(this.productId);
    });
  }
  addToCart(): void {
    this.cartService.addToCart(this.productId);
  }
  removeFromCart(): void {
    this.cartService.removeFromCart(this.productId);
  }
  toggleLike(action: string): void {
    if (action === 'like') this.likesService.addToLikes(this.item);
    else this.likesService.removeFromLikes(this.item);
  }
}
