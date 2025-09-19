import { Component } from '@angular/core';
import { SpeakerService, Speaker } from '../services copy/speaker.service';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.css']
})
export class AddSpeakerComponent {

  speaker: Speaker = {
    name: '',
    email: '',
    phone: '',
    address: '',
    keySkills: ''
  };

  username: string = '';
  password: string = '';

  constructor(private speakerService: SpeakerService) { }

  onSubmit() {
    // Validate fields
    if (!this.speaker.name || !this.speaker.email || !this.speaker.phone || 
        !this.speaker.address || !this.username || !this.password) {
      alert('Please fill in all required fields including username and password.');
      return;
    }

    // Call service to add speaker
    this.speakerService.addSpeaker(this.speaker, this.username, this.password).subscribe({
      next: (res) => {
        alert('Speaker added successfully!');
        // Reset form
        this.speaker = { name: '', email: '', phone: '', address: '', keySkills: '' };
        this.username = '';
        this.password = '';
      },
      error: (err) => {
        console.error('Error adding speaker:', err);
        alert('Failed to add speaker. Please try again.');
      }
    });
  }
}
