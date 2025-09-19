import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, Event } from '../services copy/event.service';

@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.css']
})
export class ModifyEventComponent implements OnInit {

  events: Event[] = [];
  selectedEventId: number | null = null;

  event: Event = {
    eventId: 0,
    courseTitle: '',
    topicId: 0,
    locationId: 0,
    speakerId: 0,
    classSize: 0,
    numberOfDays: 0,
    startDate: '',
    endDate: ''
  };

  topics: any[] = [];
  locations: any[] = [];
  speakers: any[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.loadDropdowns();
    this.loadEvents();
  }

  loadDropdowns() {
    this.eventService.getTopics().subscribe((data) => (this.topics = data));
    this.eventService.getLocations().subscribe((data) => (this.locations = data));
    this.eventService.getSpeakers().subscribe((data) => (this.speakers = data));
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

  updateEvent() {
    if (this.selectedEventId !== null) {
      this.eventService.updateEvent(this.selectedEventId, this.event).subscribe(
        () => {
          alert('Event updated successfully!');
          this.router.navigate(['/view-event']);
        },
        (err) => {
          console.error('Error updating event:', err);
          alert('Failed to update event.');
        }
      );
    }
  }
}
