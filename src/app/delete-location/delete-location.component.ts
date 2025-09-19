import { Component, OnInit } from '@angular/core';
import { LocationService, Location } from '../services copy/location.service';

@Component({
  selector: 'app-delete-location',
  templateUrl: './delete-location.component.html',
  styleUrls: ['./delete-location.component.css']
})
export class DeleteLocationComponent implements OnInit {
  locations: Location[] = [];
  showDelete: boolean = false;
  selectedLocationId: number =0;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.fetchLocations();
  }

  fetchLocations() {
    this.locationService.getLocations().subscribe(data => {
      this.locations = data;
    });
  }

  toggleDelete() {
    this.showDelete = !this.showDelete;
    this.selectedLocationId = 0;
  }

  selectLocation(id: number) {
    this.selectedLocationId = id;
  }

  deleteLocation() {
    if (this.selectedLocationId) {
      this.locationService.deleteLocation(this.selectedLocationId).subscribe({
        next: () => {
          alert('Location deleted!');
          this.fetchLocations();
          this.selectedLocationId = 0;
        },
        error: () => alert('Failed to delete location.')
      });
    }
  }
}