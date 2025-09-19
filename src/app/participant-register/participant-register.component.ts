import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-participant-register',
  templateUrl: './participant-register.component.html',
  styleUrls: ['./participant-register.component.css']
})
export class ParticipantRegisterComponent {
  participant: any = {
    name: '',
    email: '',
    phone: '',
    user: {
      username: '',
      password: ''
    }
  };

  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
  if (form.invalid) return;

  this.loading = true;
  this.successMessage = '';
  this.errorMessage = '';

  const payload = {
    participantId: 0,
    name: this.participant.name,
    email: this.participant.email,
    phone: this.participant.phone,
    userId: 1 // <-- hardcode or pick from login response
  };

  console.log('Sending payload:', payload);

  this.http.post('http://localhost:5070/api/Participants/Register', payload)
    .subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = 'Participant registered successfully!';
        form.resetForm();
      },
      error: (err) => {
        this.loading = false;
        console.error('Error registering participant:', err);
        this.errorMessage = 'Failed to register participant. Please check details.';
      }
    });
}
}