import { Injectable } from '@angular/core';
import { CartItem } from '../../shared/interfaces/cart';
import {
  BehaviorSubject,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private productService: ProductService) {}

  savedCart: string | null = localStorage.getItem('cart');
  private cartItemSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
  cartItem$ = this.cartItemSubject.asObservable();

  private loadCart(): CartItem[] {
    const saved: string | null = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  }

  private updateStorage(cart: CartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): Observable<CartItem[]> {
    return this.cartItem$;
  }

  getQuantity(productId: number): number {
    const currentCart: CartItem[] = this.cartItemSubject.value;
    const index: number = currentCart.findIndex(
      (item) => item.productId === productId
    );
    if (index > -1) {
      return currentCart[index].quantity;
    } else {
      return 0;
    }
  }

  addToCart(productId: number, quantity: number = 1): void {
    const currentCart: CartItem[] = this.cartItemSubject.value;
    const index: number = currentCart.findIndex(
      (item) => item.productId === productId
    );

    if (index > -1) {
      const updatedCart: CartItem[] = [...currentCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity + quantity,
      };
      this.cartItemSubject.next(updatedCart);
      this.updateStorage(updatedCart);
    } else {
      this.cartItemSubject.next([...currentCart, { productId, quantity }]);
      this.updateStorage([...currentCart, { productId, quantity }]);
    }
  }

  removeFromCart(productId: number): void {
    const updatedCart: CartItem[] = this.cartItemSubject.value
      .map((item) => {
        if (item.productId === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    this.cartItemSubject.next(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  clearCart(): void {
    this.cartItemSubject.next([]);
    localStorage.removeItem('cart');
  }

  getCartTotalPrice(): Observable<number> {
    return this.cartItemSubject
      .asObservable()
      .pipe(
        switchMap((cartItems) =>
          cartItems.length === 0
            ? of(0)
            : forkJoin(
                cartItems.map((item) =>
                  this.productService
                    .getProductById(item.productId)
                    .pipe(map((product) => product.price * item.quantity))
                )
              ).pipe(
                map((itemTotals) =>
                  itemTotals.reduce((acc, val) => acc + val, 0)
                )
              )
        )
      );
  }
}
