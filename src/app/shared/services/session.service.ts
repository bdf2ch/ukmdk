import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
import { SessionResource } from '../resources/session.resource';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private user: BehaviorSubject<User | null>;
  private authorizationInProgress: BehaviorSubject<boolean>;

  constructor(private readonly http: HttpClient,
              private readonly resource: SessionResource) {
    const user = new User({
      id: 1,
      first_name: 'Ivan',
      last_name: 'Smith',
      login: 'bdf2ch',
      passwd: 'zx12!@#$',
      is_enabled: 1
    });
    this.user = new BehaviorSubject<User | null>(user);
    this.authorizationInProgress = new BehaviorSubject<boolean>(false);
  }

  /**
   * Авторизация пользователя
   * @param login - Учетная запись
   * @param password - Пароль
   */
  signIn(login: string, password: string): Observable<User | null> {
    this.authorizationInProgress.next(true);
    return from(this.resource.signIn({action: 'signIn', account: login, password: password}))
      .pipe(
        map((result: IUser | string) => {
          console.log('result', result);
          this.user.next(result !== 'null' ? new User(result as IUser) : null);
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
  signOut(): void {
    this.authorizationInProgress.next(true);
    this.user.next(null);
  }

  /**
   * Возвращает текущего пользователя
   */
  getUser(): User | null {
    return this.user.getValue();
  }

  isAuthorizationInProgress(): Observable<boolean> {
    return this.authorizationInProgress.asObservable();
  }
}
