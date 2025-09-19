import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Speaker Registration model
export interface SpeakerRegistration {
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  keySkills: string[];
}
// Event model
export interface Event {
  eventId: number;
  courseTitle: string;
  topicId: number;
  locationId: number;
  speakerId?: number;
  classSize: number;
  numberOfDays: number;
  startDate: string;
  endDate: string;
}

// Feedback model
export interface Feedback {
  feedBackID: number;
  eventID: number;
  speakerID: number;
  feedback_remarks: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private apiUrl = 'http://localhost:5070/api/Speaker';

  constructor(private http: HttpClient) {}

 
  registerSpeaker(data: SpeakerRegistration): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

 
  getAvailableEvents(speakerId: number): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/${speakerId}/events`);
  }

  
  enrollInEvent(speakerId: number, eventId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${speakerId}/enroll/${eventId}`, {});
  }

  
  getSpeakerFeedback(speakerId: number): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/${speakerId}/feedback`);
  }
}
