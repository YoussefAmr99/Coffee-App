import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../../../../services/shared/shared.service';

@Component({
  selector: 'app-delivery',
  standalone: false,
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss',
})
export class DeliveryComponent implements OnInit {
  typeSelected: string = 'Delivery';
  mainAddress!: string;
  subAddress!: string;
  restaurantLocation: string = '';
  note?: string;
  isAddingNote: boolean = false;
  isEditingAddress: boolean = false;
  selectedOption?: string;

  @Output() onTypeClick = new EventEmitter<string>();
  @Output() addNote = new EventEmitter<string>();

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  onTypeChange(type: string): void {
    this.typeSelected = type;
    this.onTypeClick.emit(type);

    if (this.typeSelected === 'Delivery') {
      this.mainAddress = localStorage.getItem('userLocation') || '';
      this.subAddress = localStorage.getItem('subAddress') || '';
    } else {
      this.mainAddress = 'Coffee Shop Street';
      this.subAddress = '11th St, Central.';
    }
  }
  toggleNote(): void {
    this.isAddingNote = !this.isAddingNote;
    this.addNote.emit(this.note);
  }

  togglePopup(state: boolean): void {
    this.isEditingAddress = state;
  }
  getLocation(): void {
    this.mainAddress = this.sharedService.getUserLocation();
    this.subAddress = this.sharedService.getUserSubLocation();
  }
  onSubmit(): void {
    if (this.selectedOption) {
      this.sharedService.setLocation(this.selectedOption);
      this.getLocation();
      this.togglePopup(false);
    } else {
      alert('choose a valid option');
    }
  }
}
