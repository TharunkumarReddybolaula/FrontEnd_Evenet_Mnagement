import { Component } from '@angular/core';
import { SpeakerService, SpeakerRegistration } from '../speaker.service';

@Component({
  selector: 'app-register-speaker',
  templateUrl: './register-speaker.component.html',
  styleUrls: ['./register-speaker.component.css']
})
export class RegisterSpeakerComponent {
  speaker: SpeakerRegistration = {
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    keySkills: []
  };

  successMessage = '';
  errorMessage = '';
  loading = false;

  constructor(private speakerService: SpeakerService) {}

  onSubmit(form: any) {
    if (form.invalid) return;

    this.successMessage = '';
    this.errorMessage = '';
    this.loading = true;

    if (typeof this.speaker.keySkills === 'string') {
      this.speaker.keySkills = (this.speaker.keySkills as unknown as string)
        .split(',')
        .map(skill => skill.trim());
    }

    this.speakerService.registerSpeaker(this.speaker).subscribe({
      next: () => {
        this.loading = false;
        this.successMessage = '✅ Speaker registered successfully!';
        this.speaker = {
          username: '',
          password: '',
          name: '',
          email: '',
          phone: '',
          address: '',
          keySkills: []
        };
        form.resetForm();
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || '❌ Failed to register speaker';
      }
    });
  }
}
