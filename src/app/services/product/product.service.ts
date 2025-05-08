import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private dataUrl: string = '/data/products.json';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProductById(productId: number): Observable<Product> {
    return this.getProducts().pipe(
      map((products) => {
        const found: Product | undefined = products.find(
          (p) => p.id === productId
        );
        if (!found) {
          throw new Error(`Product with id ${productId} not found`);
        }
        return found;
      })
    );
  }

  getProductPrice(productId: number): Observable<number> {
    return this.getProductById(productId).pipe(map((product) => product.price));
  }
}
