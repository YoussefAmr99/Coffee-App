import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  standalone: false,
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss',
})
export class PromoComponent implements OnInit, OnDestroy {
  images: string[] = [
    'images/banner.svg',
    'images/bannerTwo.jpg',
    'images/bannerThree.jpg',
  ];

  currentIndex: number = 0;
  currentImage!: string;
  intervalId: any;

  ngOnInit(): void {
    this.currentImage = this.images[this.currentIndex];

    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 6000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
