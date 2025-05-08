import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class LikesService {
  private likesSubject = new BehaviorSubject<Product[]>(this.loadLikes());
  likes$ = this.likesSubject.asObservable();
  constructor() {}

  private loadLikes(): Product[] {
    const saved: string | null = localStorage.getItem('likes');
    return saved ? JSON.parse(saved) : [];
  }

  private updateStorage(likes: Product[]) {
    localStorage.setItem('likes', JSON.stringify(likes));
  }

  getLikes(): Observable<Product[]> {
    return this.likes$;
  }

  addToLikes(product: Product): void {
    const currentLikes: Product[] = this.likesSubject.value;
    if (!currentLikes.includes(product)) {
      const updatedLikes: Product[] = [...currentLikes, product];
      this.likesSubject.next(updatedLikes);
      this.updateStorage(updatedLikes);
    }
  }

  removeFromLikes(product: Product): void {
    const updatedLikes: Product[] = this.likesSubject.value.filter(
      (p) => p.id !== product.id
    );
    this.likesSubject.next(updatedLikes);
    this.updateStorage(updatedLikes);
  }

  isLiked(product: Product): boolean {
    return this.likesSubject.value.some((p) => {
      return p.id === product.id;
    });
  }
}
