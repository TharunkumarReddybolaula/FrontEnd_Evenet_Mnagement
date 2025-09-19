import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services copy/admin.service';
import { EventService } from '../services copy/event.service';
import { TopicServiceService } from '../services copy/topic-service.service';
import { LocationService } from '../services copy/location.service';
import { SpeakerService } from '../services copy/speaker.service';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  counts = {
    admins: 0,
    events: 0,
    topics: 0,
    locations: 0,
    speakers: 0
  };

  constructor(
    private adminService: AdminService,
    private eventService: EventService,
    private topicService: TopicServiceService,
    private locationService: LocationService,
    private speakerService: SpeakerService
  ) { }

  ngOnInit(): void {
    this.loadCounts();
  }

  loadCounts() {
    // Using forkJoin to load all counts in parallel and update the counts object
    forkJoin({
      admins: this.adminService.getAllAdmins(),
      events: this.eventService.getEvents(),
      topics: this.topicService.getAllTopics(),
      locations: this.locationService.getLocations(),
      speakers: this.speakerService.getSpeakers()
    }).subscribe(response => {
      this.counts.admins = response.admins.length;
      this.counts.events = response.events.length;
      this.counts.topics = response.topics.length;
      this.counts.locations = response.locations.length;
      this.counts.speakers = response.speakers.length;
    });
  }
}
