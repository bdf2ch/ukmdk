import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-delete-feedback-dialog',
  templateUrl: './delete-feedback-dialog.component.html',
  styleUrls: ['./delete-feedback-dialog.component.css']
})
export class DeleteFeedbackDialogComponent implements OnInit {

  constructor(private readonly dialogRef: MatDialogRef<DeleteFeedbackDialogComponent>,
              public readonly feedback: FeedbackService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {}

  deleteMessage() {
    console.log(this.data);
    this.feedback.deleteMessage(this.data.message)
      .subscribe(() => {
        this.dialogRef.close();
        this.feedback.fetchList().subscribe();
      });
  }

  cancel() {
    this.dialogRef.close();
  }

}
