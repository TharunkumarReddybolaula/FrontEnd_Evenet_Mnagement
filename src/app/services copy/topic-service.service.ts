// topic-service.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Topic {
  topicId?: number;
  topicCode: string;
  topicName: string;
  category: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {
  private baseUrl = 'http://localhost:5070/api/Admin'; // Base URL for the Topic API

  constructor(private http: HttpClient) { }

  // Corrected endpoint to match the Swagger API
  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`${this.baseUrl}/Topics`); // No "view" part, just "/Topics"
  }

  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(`${this.baseUrl}/Topic/Add`, topic); 
  }

  updateTopic(id: number, topic: Topic): Observable<any> {
    return this.http.put<Topic>(`${this.baseUrl}/Topic/Modify?id=${id}`, topic);
  }
}
