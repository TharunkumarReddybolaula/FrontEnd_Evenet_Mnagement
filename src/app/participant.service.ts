import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Participant interface
export interface Participant {
  participantId?: number;
  name: string;
  email: string;
  phone: string;
  user?: {
    userId?: number;
    username: string;
    password: string;
  };
}

// Define the Feedback interface
export interface Feedback {
  feedbackId?: number;
  eventID: number;
  speakerID: number;
  feedback_remarks: string;
}

// Define the Event interface
export interface Event {
  eventID: number;
  eventName: string;
  eventDescription: string;
  eventDate: string;  // Example, adjust this based on your actual Event model
}

// Define the Speaker interface
export interface Speaker {
  speakerID: number;
  speakerName: string;
  speakerBio: string;  // Example, adjust this based on your actual Speaker model
}

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  private baseUrl = 'http://localhost:5070/api/Participants'; // Base URL for API

  constructor(private http: HttpClient) {}

  // Register a new participant
  register(participant: Participant): Observable<any> {
    return this.http.post(`${this.baseUrl}/Register`, participant);
  }

  // Enroll participant in an event
  enroll(participantId: number, eventId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${participantId}/Enroll/${eventId}`, {});
  }

  // Update participant details
  update(id: number, participant: Participant): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, participant);
  }

  // Submit feedback
  submitFeedback(feedback: Feedback): Observable<any> {
    return this.http.post(`${this.baseUrl}/Feedback`, feedback);
  }

  // Fetch all events
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:5070/api/Events');
  }

  // Fetch all speakers
  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>('http://localhost:5070/api/Speakers');
  }
}
