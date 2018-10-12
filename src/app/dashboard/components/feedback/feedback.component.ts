import { Component, OnInit } from '@angular/core';
import { FeedbackDataSource } from '../../resources/feedback.datasource';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  dataSource: FeedbackDataSource;
  displayedColumns = ['id', 'name', 'email', 'message', 'dateCreated'];

  constructor(public readonly feedbackService: FeedbackService) {}

  ngOnInit() {
    this.dataSource = new FeedbackDataSource(this.feedbackService);
    // this.dataSource.loadFeedback();
  }

}
