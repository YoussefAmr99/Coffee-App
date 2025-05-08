import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../shared/interfaces/product';
import { ProductService } from '../../../services/product/product.service';
import { filter } from '../../../shared/interfaces/filter';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.scss',
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {}

  filteredProducts!: Product[];
  products!: Product[];
  selectedCategory: string = 'All Coffee';
  searchTerm: string = '';
  filter!: filter;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = [...res];
      this.filteredProducts = [...this.products];
    });
  }

  onTabChanged(event: string): void {
    this.router.navigateByUrl(`${event}`);
  }

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.filterProducts();
  }
  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filterProducts();
  }
  onFilter(filter: filter): void {
    this.filter = filter;
    this.filterProducts();
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch: boolean = product.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      const matchesCategory: boolean =
        this.selectedCategory === 'All Coffee' ||
        product.category === this.selectedCategory;
      const matchesPrice: boolean =
        this.filter.price === 0 || product.price <= this.filter.price;
      const matchesRating: boolean =
        !this.filter.rating || product.rating >= Number(this.filter.rating);
      const matchesState: boolean =
        !this.filter.state || product.state === this.filter.state;
      return (
        matchesCategory &&
        matchesSearch &&
        matchesPrice &&
        matchesRating &&
        matchesState
      );
    });
  }

  goToDetail(productId: number): void {
    this.router.navigateByUrl(`product/${productId}`);
  }
}
