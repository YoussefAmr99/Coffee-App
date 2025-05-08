import { Component, Input } from '@angular/core';
import { SharedService } from '../../../../services/shared/shared.service';

@Component({
  selector: 'app-location',
  standalone: false,
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  userLocations!: string[];
  selectedLocation!: string;
  isPopupOpen: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.userLocations = this.sharedService.getLocations();
    this.selectedLocation = this.sharedService.getUserLocation();
  }

  onLocationClick(): void {
    this.isPopupOpen = true;
    this.toggleScrolling('hidden');
  }

  onLocationSelect(location: string): void {
    this.selectedLocation = location;
    this.sharedService.setLocation(location);
    this.isPopupOpen = false;
    this.toggleScrolling('visible');
  }

  onPopupClose(): void {
    this.isPopupOpen = false;
    this.toggleScrolling('visible');
  }

  toggleScrolling(state: string): void {
    document.body.style.overflow = state;
  }
}
