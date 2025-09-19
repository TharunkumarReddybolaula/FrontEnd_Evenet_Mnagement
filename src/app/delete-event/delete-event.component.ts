import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../services copy/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit {

  events: Event[] = [];
  selectedEventId: number | null = null;
  event: Event | null = null;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe((data) => (this.events = data));
  }

  onSelectEvent() {
    if (this.selectedEventId !== null) {
      this.eventService.getEventById(this.selectedEventId).subscribe((data) => {
        this.event = data;
      });
    }
  }

  deleteEvent() {
    if (this.selectedEventId !== null) {
      if (confirm('Are you sure you want to delete this event?')) {
        this.eventService.deleteEvent(this.selectedEventId).subscribe(() => {
          alert('Event deleted successfully!');
          this.router.navigate(['/view-event']);
        }, (err) => {
          console.error('Error deleting event:', err);
          alert('Failed to delete event.');
        });
      }
    }
  }
}
