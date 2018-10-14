import { Component, OnInit } from '@angular/core';
import { FeedbackDataSource } from '../../resources/feedback.datasource';
import { FeedbackService } from '../../services/feedback.service';
import { MatDialog } from '@angular/material';
import { DeleteFeedbackDialogComponent } from '../delete-feedback-dialog/delete-feedback-dialog.component';
import { Feedback } from '../../models/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  dataSource: FeedbackDataSource;
  displayedColumns = ['id', 'name', 'email', 'message', 'dateCreated', 'controls'];

  constructor(private readonly dialog: MatDialog,
              public readonly feedbackService: FeedbackService) {}

  ngOnInit() {
    this.dataSource = new FeedbackDataSource(this.feedbackService);
    // this.dataSource.loadFeedback();
  }

  openDeleteMessageDialog(message: Feedback) {
    this.dialog.open(DeleteFeedbackDialogComponent, {
      width: '400px',
      data: {
        message: message
      }
    });
  }

}
