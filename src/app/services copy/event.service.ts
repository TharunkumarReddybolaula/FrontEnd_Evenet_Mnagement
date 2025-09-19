import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Event {
  eventId?: number;
  courseTitle: string;
  topicId: number;
  locationId: number;
  speakerId: number;
  classSize: number;
  numberOfDays: number;
  startDate: string;
  endDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:5070/api/Admin';  // Base URL

  constructor(private http: HttpClient) {}

  // Get event by ID
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/Events/${id}`);
  }

  // Update event
  updateEvent(id: number, event: Event): Observable<any> {
    return this.http.put(`${this.apiUrl}/Events/Modify?id=${id}`, event);
  }

  // Delete event
  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Events/Delete?id=${id}`);
  }

  // Add new event
  addEvent(event: Event): Observable<any> {
    return this.http.post(`${this.apiUrl}/Events/Add`, event);
  }

  // Get all events
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/Events`);  // Use the correct URL
  }

  // Get topics for dropdown
  getTopics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Topic/view`);
  }

  // Get locations for dropdown
  getLocations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Location/View`);
  }

  // Get speakers for dropdown
  getSpeakers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Speakers/View`);
  }
}
