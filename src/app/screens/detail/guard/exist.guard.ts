import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { catchError, map, of } from 'rxjs';

export const existGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router: Router = inject(Router);
  const productId: string | null = route.paramMap.get('id');

  const productService: ProductService = inject(ProductService);

  if (!productId || isNaN(+productId) || +productId <= 0) {
    router.navigateByUrl('home');
    return false;
  }
  return productService.getProductById(+productId).pipe(
    map(() => {
      return true;
    }),
    catchError(() => {
      router.navigateByUrl('home');
      return of(false);
    })
  );
};
