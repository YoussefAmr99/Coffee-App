import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-bar',
  standalone: false,
  templateUrl: './categoryBar.component.html',
  styleUrl: './categoryBar.component.scss',
})
export class CategoryBarComponent {
  categories: { name: string }[] = [
    { name: 'All Coffee' },
    { name: 'Macchiato' },
    { name: 'Latte' },
    { name: 'Americano' },
    { name: 'Espresso' },
    { name: 'Turkish' },
  ];

  selectedCategory: string = 'All Coffee';
  @Output() onCategorySelected = new EventEmitter<string>();

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.onCategorySelected.emit(category);
  }
}
