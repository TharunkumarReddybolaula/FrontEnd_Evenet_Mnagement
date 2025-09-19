import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../services copy/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  newEvent: Event = {
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

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadDropdowns();
  }

  loadDropdowns(): void {
    this.eventService.getTopics().subscribe(data => this.topics = data);
    this.eventService.getLocations().subscribe(data => this.locations = data);
    this.eventService.getSpeakers().subscribe(data => this.speakers = data);
  }

  addEvent(): void {
    this.eventService.addEvent(this.newEvent).subscribe({
      next: (res) => {
        alert('Event added successfully!');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error adding event:', err);
        alert('Failed to add event');
      }
    });
  }

  resetForm(): void {
    this.newEvent = {
      courseTitle: '',
      topicId: 0,
      locationId: 0,
      speakerId: 0,
      classSize: 0,
      numberOfDays: 0,
      startDate: '',
      endDate: ''
    };
  }
}
