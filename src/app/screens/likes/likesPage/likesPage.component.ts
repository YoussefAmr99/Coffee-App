import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { LikesService } from '../../../services/likes/likes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likes-page',
  standalone: false,
  templateUrl: './likesPage.component.html',
  styleUrl: './likesPage.component.scss',
})
export class LikesPageComponent implements OnInit {
  likedItems!: Product[];

  constructor(private likesService: LikesService, private router: Router) {}
  ngOnInit(): void {
    this.likesService.getLikes().subscribe((likes) => {
      this.likedItems = likes;
    });
  }

  goToDetail(productId: number): void {
    this.router.navigateByUrl(`product/${productId}`);
  }
}
