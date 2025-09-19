import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../services copy/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  events: Event[] = [];  // Store events
  loading: boolean = true; // Loading indicator
  errorMessage: string = '';  // Error message to display

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  // Method to load events
  loadEvents() {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;  // Store event data
        this.loading = false; // Hide loading indicator
      },
      error: (err) => {
        this.errorMessage = 'Failed to load events: ' + err.message; // Set error message
        this.loading = false; // Hide loading indicator
        console.error('Error fetching events:', err); // Log error to console
      }
    });
  }
}
