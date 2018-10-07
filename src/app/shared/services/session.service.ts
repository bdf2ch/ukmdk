import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
import { SessionResource } from '../resources/session.resource';
import { finalize, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user: BehaviorSubject<User | null>;
  private authorizationInProgress: BehaviorSubject<boolean>;

  constructor(private readonly http: HttpClient,
              private readonly resource: SessionResource) {
    this.user = new BehaviorSubject<User | null>(null);
    this.authorizationInProgress = new BehaviorSubject<boolean>(false);
  }

  /**
   * Авторизация пользователя
   * @param login - Учетная запись
   * @param password - Пароль
   */
  signIn(login: string, password: string): Observable<User | null> {
    this.authorizationInProgress.next(true);
    return from(this.resource.signIn())
      .pipe(
        map((user: IUser | null) => {
          this.user.next(user ? new User(user) : null);
          return this.user.value;
        }),
        finalize(() => {
          this.authorizationInProgress.next(false);
        })
      );
  }

  /**
   * Завршение сессии пользователя
   */
  signOut(): Observable<void> {
    this.authorizationInProgress.next(true);
    return from(this.resource.signOut())
      .pipe(
        map(() => {
          this.user.next(null);
        }),
        finalize(() => {
          this.authorizationInProgress.next(false);
        })
      );
  }

  /**
   * Возвращает текущего пользователя
   */
  getUser(): Observable<User | null> {
    return this.user.asObservable();
  }
}
