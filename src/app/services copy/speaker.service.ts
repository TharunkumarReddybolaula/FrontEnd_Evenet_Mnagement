import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Speaker {
  speakerId?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  keySkills?: string;
  userId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  private apiUrl = 'http://localhost:5070/api/Admin';  // Base URL for the API

  constructor(private http: HttpClient) {}

  /**
   * Add a new speaker with linked User credentials
   * @param speaker - Speaker details
   * @param username - Username for login
   * @param password - Password for login
   */
  addSpeaker(speaker: Speaker, username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/Add?username=${username}&password=${password}`, speaker);
  }

  /** Fetch all speakers */
  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(`${this.apiUrl}/Speakers`);  // Ensure this matches your backend API endpoint
  }
}
