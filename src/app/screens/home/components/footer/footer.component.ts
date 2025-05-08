import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Output() onTabChange: EventEmitter<string> = new EventEmitter<string>();

  tabs: { name: string; icon: string }[] = [
    { name: 'home', icon: 'home' },
    { name: 'likes', icon: 'heart' },
    { name: 'cart', icon: 'bag' },
  ];

  selectedTab: string = 'home';

  onTabClick(tabName: string): void {
    this.onTabChange.emit(tabName);
  }
}
