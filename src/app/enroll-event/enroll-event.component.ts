import { Component, OnInit } from '@angular/core';
import { SpeakerService, Event } from '../speaker.service';

@Component({
  selector: 'app-enroll-event',
  templateUrl: './enroll-event.component.html',
  styleUrls: ['./enroll-event.component.css']
})
export class EnrollEventComponent implements OnInit {
  speakerId = 1; // 🔹 replace with logged-in speaker’s ID (later from JWT)
  events: Event[] = [];
  successMessage = '';
  errorMessage = '';
  loading = false;

  constructor(private speakerService: SpeakerService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.loading = true;
    this.speakerService.getAvailableEvents(this.speakerId).subscribe({
      next: (res) => {
        this.events = res;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = '❌ Failed to load events';
        this.loading = false;
      }
    });
  }

  enroll(eventId: number) {
    this.successMessage = '';
    this.errorMessage = '';
    this.speakerService.enrollInEvent(this.speakerId, eventId).subscribe({
      next: () => {
        this.successMessage = `✅ Successfully enrolled in event #${eventId}`;
        this.loadEvents(); // reload events after enrolling
      },
      error: () => {
        this.errorMessage = '❌ Failed to enroll in event';
      }
    });
  }
}
