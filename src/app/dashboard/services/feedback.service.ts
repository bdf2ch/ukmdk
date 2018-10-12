import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { Feedback } from '../models/feedback.model';
import { FeedbackResource } from '../resources/feedback.resource';
import { IFeedback } from '../interfaces/feedback.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private messages: BehaviorSubject<Feedback[]>;
  private fetchingMessagesInProgress: BehaviorSubject<boolean>;
  private deletingMessageInProgress: BehaviorSubject<boolean>;

  constructor(private readonly resource: FeedbackResource) {
    this.messages = new BehaviorSubject<Feedback[]>([]);
    this.fetchingMessagesInProgress = new BehaviorSubject(false);
    this.deletingMessageInProgress = new BehaviorSubject(false);

    this.messages.next([
      new Feedback({
        id: 1,
        name: 'Pidor',
        email: 'dasdasd',
        message: 'lorem dsfdsfs dsfdsds dsfsdfs',
        date_created: new Date().getTime()
      }),
      new Feedback({
        id: 1,
        name: 'Pidor',
        email: 'dasdasd',
        message: 'lorem dsfdsfs dsfdsds dsfsdfs',
        date_created: new Date().getTime()
      }),
      new Feedback({
        id: 1,
        name: 'Pidor',
        email: 'dasdasd',
        message: 'lorem dsfdsfs dsfdsds dsfsdfs',
        date_created: new Date().getTime()
      }),
      new Feedback({
        id: 1,
        name: 'Pidor',
        email: 'dasdasd',
        message: 'lorem dsfdsfs dsfdsds dsfsdfs',
        date_created: new Date().getTime()
      })
    ]);
  }

  fetchList(): Observable<Feedback[]> {
    this.fetchingMessagesInProgress.next(true);
    return from(this.resource.getList({action: 'getFeedbackList'}))
      .pipe(
        map((result: IFeedback[]) => {
          console.log('result', result);
          const messages: Feedback[] = [];
          result.forEach((item: IFeedback) => {
            messages.push(new Feedback(item));
          });
          this.messages.next(messages);
          return this.messages.value;
        }),
        /*
        catchError(() => {
          this.fetchingMessagesInProgress.next(false);
          return of([]);
        }),
        */
        finalize(() => {
          this.fetchingMessagesInProgress.next(false);
        })
      );
  }

  getList(): Observable<Feedback[]> {
    return this.messages.asObservable();
  }

  fetchingInProgress(): Observable<boolean> {
    return this.fetchingMessagesInProgress.asObservable();
  }
}
