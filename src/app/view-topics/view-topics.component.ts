// view-topics.component.ts
import { Component } from '@angular/core';
import { TopicServiceService, Topic } from '../services copy/topic-service.service';

@Component({
  selector: 'app-view-topics',
  templateUrl: './view-topics.component.html',
  styleUrls: ['./view-topics.component.css']
})
export class ViewTopicsComponent {

  topics: Topic[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private topicService: TopicServiceService) { }

  ngOnInit(): void {
    this.loadTopics();
  }

  loadTopics() {
    this.loading = true;
    this.topicService.getAllTopics().subscribe({
      next: (data) => {
        this.topics = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching topics:', err);
        this.errorMessage = err?.error || 'Error fetching topics';
        this.loading = false;
      }
    });
  }
}
