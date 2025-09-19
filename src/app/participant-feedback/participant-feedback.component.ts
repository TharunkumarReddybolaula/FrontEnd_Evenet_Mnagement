import { Component, OnInit } from '@angular/core';
import { ParticipantsService, Feedback, Event, Speaker } from '../participant.service'; // Import Event and Speaker

@Component({
  selector: 'app-feedback',
  templateUrl: './participant-feedback.component.html',
  styleUrls: ['./participant-feedback.component.css']
})
export class ParticipantFeedbackComponent implements OnInit {
  feedback: Feedback = { eventID: 0, speakerID: 0, feedback_remarks: '' };
  events: Event[] = []; // Array to hold events
  speakers: Speaker[] = []; // Array to hold speakers
  message: string = '';
  isSuccess: boolean = false;

  constructor(private service: ParticipantsService) {}

  ngOnInit() {
    this.loadEvents(); // Fetch events
    this.loadSpeakers(); // Fetch speakers
  }

  loadEvents() {
    this.service.getEvents().subscribe(events => {
      this.events = events; // Store fetched events in the events array
    });
  }

  loadSpeakers() {
    this.service.getSpeakers().subscribe(speakers => {
      this.speakers = speakers; // Store fetched speakers in the speakers array
    });
  }

  submit() {
    this.service.submitFeedback(this.feedback).subscribe({
      next: (res) => {
        this.message = res.message;
        this.isSuccess = true;
      },
      error: (err) => {
        this.message = err.error || 'An error occurred while submitting the feedback.';
        this.isSuccess = false;
      }
    });
  }
}
