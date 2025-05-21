import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter } from '../../../../shared/interfaces/filter';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  searchTerm!: string;
  isDropdownOpen: boolean = false;
  filters: filter = {
    price: 5,
    state: '',
    rating: '',
  };
  @Output() searchChanged = new EventEmitter<string>();
  @Output() onFilterApply = new EventEmitter<filter>();

  ngOnInit(): void {
    this.clearFilters();
  }

  onSearchChange(value: string): void {
    this.searchChanged.emit(value.trim());
  }
  toggleDropDown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  applyFilters(): void {
    this.onFilterApply.emit(this.filters);
    this.isDropdownOpen = false;
  }
  clearFilters(): void {
    this.filters = {
      price: 5,
      state: '',
      rating: '',
    };
    this.applyFilters();
  }
}
