import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public readonly session: SessionService) { }

  ngOnInit() {}

  /**
   * Завершение сессии пользователя
   */
  signOut() {
    this.session.signOut();
  }
}
