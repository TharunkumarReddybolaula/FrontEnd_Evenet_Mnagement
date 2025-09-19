import { Component } from '@angular/core';
import { LocationService, Location } from '../services copy/location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {
  location: Location = { city: '', state: '', description: '' };

  constructor(private locationService: LocationService) {}

  onSubmit(form: any) {
    if (!this.location.city || !this.location.state) {
      alert('City and State are required!');
      return;
    }
    this.locationService.addLocation(this.location).subscribe({
      next: () => {
        alert('Location added!');
        this.location = { city: '', state: '', description: '' };
        form.resetForm();
      },
      error: () => alert('Failed to add location.')
    });
  }
}