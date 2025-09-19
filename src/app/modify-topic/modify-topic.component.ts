import { Component, OnInit } from '@angular/core';
import { TopicServiceService,Topic } from '../services copy/topic-service.service';
@Component({
  selector: 'app-modify-topic',
  templateUrl: './modify-topic.component.html',
  styleUrls: ['./modify-topic.component.css']
})
export class ModifyTopicComponent implements OnInit {
  topics: Topic[] = [];
  selectedTopicId: number  = 0;
  topic: Topic = { topicCode: '', topicName: '', category: '', description: '' };
  successMessage = '';
  errorMessage = '';

  constructor(private topicService: TopicServiceService) {}

  ngOnInit(): void {
    this.loadTopics();
  }

  loadTopics() {
    this.topicService.getAllTopics().subscribe({
      next: (data) => {
        this.topics = data;
      },
      error: () => {
        this.errorMessage = 'Error fetching topics';
      }
    });
  }

  onTopicSelect() {
    if (this.selectedTopicId) {
      const found = this.topics.find(t => t.topicId === this.selectedTopicId);
      if (found) {
        this.topic = { ...found };
        this.successMessage = '';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Topic not found';
      }
    }
  }

  onSubmit() {
    if (!this.selectedTopicId) {
      this.errorMessage = 'Please select a topic first';
      return;
    }

    this.topicService.updateTopic(this.selectedTopicId, this.topic).subscribe({
      next: () => {
        this.successMessage = 'Topic updated successfully!';
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Failed to update topic. Please try again.';
        this.successMessage = '';
      }
    });
  }
}
