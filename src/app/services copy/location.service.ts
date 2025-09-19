import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Location {
  locationId?: number;
  city: string;
  state: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl = 'http://localhost:5070/api/Admin';  // Make sure this is the correct base URL

  constructor(private http: HttpClient) {}

  /** Get a location by ID */
  getLocationById(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}/get?id=${id}`);
  }

  /** Add a new location */
  addLocation(location: Location): Observable<any> {
    return this.http.post(`${this.baseUrl}/Add`, location);
  }

  /** Get all locations */
  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.baseUrl}/Locations`);  // Assuming the correct endpoint is /Locations
  }

  /** Update a location */
  updateLocation(location: Location, id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/Modify/${id}`, location);  // Ensure correct endpoint and pass ID in URL
  }

  /** Delete a location */
  deleteLocation(locationId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete?id=${locationId}`);  // Ensure correct endpoint for deleting
  }
}
