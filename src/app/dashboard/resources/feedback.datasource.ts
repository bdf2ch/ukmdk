import { DataSource } from '@angular/cdk/table';
import { Feedback } from '../models/feedback.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FeedbackService } from '../services/feedback.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError } from 'rxjs/operators';

export class FeedbackDataSource implements DataSource<Feedback> {

  private feedbackSubject = new BehaviorSubject<Feedback[]>([]);

  constructor(private feedbackService: FeedbackService) {}

  connect(collectionViewer: CollectionViewer): Observable<Feedback[]> {
    //return this.feedbackSubject.asObservable();
    return this.feedbackService.getList();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.feedbackSubject.complete();
  }

  loadFeedback() {
    /*
    this.feedbackService.fetchList()
      .pipe(
         catchError(() => of([])),
    ).subscribe(
      feedback => this.feedbackSubject.next(feedback)
    );
    */
  }
}
