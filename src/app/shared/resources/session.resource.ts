import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResourceParams, ResourceHandler, ResourceAction, ResourceRequestMethod, IResourceMethod, Resource } from '@ngx-resource/core';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: environment.apiUrl
})
export class SessionResource extends Resource {

  constructor(handler: ResourceHandler) {
    super(handler);
  }

  /**
   * Path: /
   * Method: GET
   * Авторизация пользователя
   */
  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  signIn: IResourceMethod<{action: string, account: string, password: string}, IUser | null>;

  /**
   * Path: /
   * Method: GET
   * Завершение сессии пользователя
   */
  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  signOut: IResourceMethod<{action: string}, void>;
}

