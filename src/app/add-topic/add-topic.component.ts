import { Component } from '@angular/core';
import { TopicServiceService,Topic } from '../services copy/topic-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent {
    topic: Topic = {
    topicCode: '',
    topicName: '',
    category: '',
    description: ''
  };

  successMessage: string = '';
  errorMessage: string = '';
    constructor(private topicService: TopicServiceService, private router: Router) {}
    onSubmit() {
    if (!this.topic.topicCode || !this.topic.topicName || !this.topic.category) {
      this.errorMessage = 'Please fill all required fields.';
      return;
    }

    this.topicService.addTopic(this.topic).subscribe({
      next: (res) => {
        this.successMessage = 'Topic added successfully!';
        this.errorMessage = '';
        this.topic = { topicCode: '', topicName: '', category: '', description: '' };
      },
      error: (err) => {
        console.error('Error adding topic:', err);
        this.errorMessage = 'Failed to add topic. Please try again.';
        this.successMessage = '';
      }
    });
  }
}
