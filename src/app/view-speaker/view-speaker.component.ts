import { Component, OnInit } from '@angular/core';
import { SpeakerService, Speaker } from '../services copy/speaker.service';

@Component({
  selector: 'app-view-speakers',
  templateUrl: './view-speaker.component.html',
  styleUrls: ['./view-speaker.component.css']
})
export class ViewSpeakerComponent implements OnInit {

  speakerList: Speaker[] = [];  // To store the list of speakers

  constructor(private speakerService: SpeakerService) { }

  ngOnInit(): void {
    this.loadSpeakers();  // Fetch speakers when the component is initialized
  }

  loadSpeakers() {
    this.speakerService.getSpeakers().subscribe({
      next: (data) => {
        this.speakerList = data;  // Assign response to speakerList
      },
      error: (err) => {
        console.error('Error fetching speakers:', err);
        alert('Failed to load speakers from the database.');
      }
    });
  }
}
