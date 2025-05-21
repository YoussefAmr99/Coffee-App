import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private note?: string;
  private locations: string[] = ['Cairo, Egypt', 'New York, USA', 'London, UK'];
  private userLocation!: string;
  private userSubLocation!: string;

  addNote(note: string): void {
    this.note = note;
    localStorage.setItem('note', note);
  }

  getNote(): string | undefined {
    return this.note;
  }

  clearNote(): void {
    this.note = undefined;
    localStorage.removeItem('note');
  }

  getLocations(): string[] {
    return this.locations;
  }

  setLocation(location: string): void {
    this.userLocation = location;
    this.userSubLocation = `13St, Central, ${location}.`;
    localStorage.setItem('userLocation', location);
    localStorage.setItem('subAddress', this.userSubLocation);
  }

  getUserLocation(): string {
    if (this.userLocation) {
      return this.userLocation;
    } else {
      this.setLocation('Cairo, Egypt');
      return this.userLocation;
    }
  }

  getUserSubLocation(): string {
    return this.userSubLocation || `13St, Central, ${this.getUserLocation()}`;
  }
}
