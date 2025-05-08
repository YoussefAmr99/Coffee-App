import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared/interfaces/product';

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() product!: Product;
  isExpanded: boolean = false;
  maxLength: number = 100;

  get shortDescription(): string {
    return `${this.product.longDescription?.slice(0, this.maxLength)}..`;
  }

  toggleDescription(): void {
    this.isExpanded = !this.isExpanded;
  }
}
