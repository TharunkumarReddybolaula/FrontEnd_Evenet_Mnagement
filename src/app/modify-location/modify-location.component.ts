import { Component, OnInit } from '@angular/core';
import { Location, LocationService } from '../services copy/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-location',
  templateUrl: './modify-location.component.html',
  styleUrls: ['./modify-location.component.css']
})
export class ModifyLocationComponent implements OnInit {
  location: Location = {
    city: '',
    state: '',
    description: ''
  };

  locationId: number | null = null;

  constructor(
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch the location ID from the route if you are modifying an existing location
    this.locationId = +this.activatedRoute.snapshot.paramMap.get('id')!;
    
    if (this.locationId) {
      this.loadLocation(this.locationId);
    }
  }

  loadLocation(id: number) {
    this.locationService.getLocationById(id).subscribe({
      next: (data) => {
        this.location = data;
      },
      error: () => {
        alert('Error loading location details.');
      }
    });
  }

  onSubmit() {
    if (this.locationId) {
      // Call the updateLocation method with the location data and location ID
      this.locationService.updateLocation(this.location, this.locationId).subscribe({
        next: () => {
          alert('Location updated successfully!');
          this.router.navigate(['/view-location']);  // Navigate to the view location page
        },
        error: (err) => {
          console.error('Error updating location:', err);
          alert('Failed to update location.');
        }
      });
    }
  }
}
