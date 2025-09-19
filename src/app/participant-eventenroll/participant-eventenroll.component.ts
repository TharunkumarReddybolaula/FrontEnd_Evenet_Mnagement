import { Component } from '@angular/core';
import { ParticipantsService } from '../participant.service';

@Component({
  selector: 'app-participant-eventenroll',
  templateUrl: './participant-eventenroll.component.html',
  styleUrls: ['./participant-eventenroll.component.css']
})
export class ParticipantEventenrollComponent {
  participantId!: number;
  eventId!: number;
  message = '';

  constructor(private service: ParticipantsService) {}

  enroll() {
    if (this.participantId && this.eventId) {
      this.service.enroll(this.participantId, this.eventId).subscribe({
        next: (res) => this.message = res.message,
        error: (err) => this.message = err.error
      });
    } else {
      this.message = 'Please provide both Participant ID and Event ID.';
    }
  }
}
