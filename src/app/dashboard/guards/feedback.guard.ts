import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback.model';
import {FeedbackService} from '../services/feedback.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackGuard implements Resolve<Feedback[]> {
  constructor(private readonly feedback: FeedbackService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Feedback[]> | Promise<Feedback[]> | Feedback[] {
    return this.feedback.fetchList();
  }
}
