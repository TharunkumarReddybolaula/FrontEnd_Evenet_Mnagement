import { Component, OnInit } from '@angular/core';
import { Location, LocationService } from '../services copy/location.service';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit {
  locations: Location[] = [];

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  /** Load locations from the backend */
  loadLocations() {
    this.locationService.getLocations().subscribe({
      next: (data) => this.locations = data,  // Set the data to locations array
      error: () => alert('Failed to fetch locations.')  // Error handling
    });
  }

  /** Delete a location */
  deleteLocation(locationId: number) {
    if (confirm('Are you sure you want to delete this location?')) {
      this.locationService.deleteLocation(locationId).subscribe({
        next: () => {
          alert('Location deleted successfully');
          this.loadLocations();  // Reload the locations after deletion
        },
        error: (err) => {
          alert('Failed to delete location');
          console.error(err);
        }
      });
    }
  }
}
