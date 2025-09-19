import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Participant {
  participantId: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-participant-update',
  templateUrl: './participant-update.component.html',
  styleUrls: ['./participant-update.component.css']
})
export class ParticipantUpdateComponent {
  participant: Participant = {
    participantId: 0,
    name: '',
    email: '',
    phone: ''
  };

  loading = false;
  successMessage = '';
  errorMessage = '';

  private apiUrl = 'http://localhost:5070/api/Participants';

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    if (form.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly.';
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.http.put<any>(`${this.apiUrl}/${this.participant.participantId}`, this.participant)
      .subscribe({
        next: (res) => {
          this.successMessage = res.message || 'Participant updated successfully!';
          this.loading = false;
        },
        error: (err) => {
          console.error('Error updating participant:', err);
          this.errorMessage = err.error || 'Failed to update participant. Please try again.';
          this.loading = false;
        }
      });
  }
}
