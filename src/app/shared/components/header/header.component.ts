import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(private location: Location) {}
  showLikesButton: boolean = false;
  @Input() title!: string;
  @Input() isLiked!: boolean;
  @Output() toggleLike = new EventEmitter<string>();

  ngOnInit(): void {
    if (this.title === 'Detail') {
      this.showLikesButton = true;
    }
  }
  onBackButtonClick(): void {
    this.location.back();
  }
  toggleLikes(action: string): void {
    this.toggleLike.emit(action);
    this.isLiked = !this.isLiked;
  }
}
