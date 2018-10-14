import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResourceParams, ResourceHandler, ResourceAction, ResourceRequestMethod, IResourceMethod, Resource } from '@ngx-resource/core';
import { IFeedback } from '../interfaces/feedback.interface';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: environment.apiUrl
})
export class FeedbackResource extends Resource {

  constructor(handler: ResourceHandler) {
    super(handler);
  }

  /**
   * Path: /
   * Method: GET
   * Получение списка сообщений
   */
  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  getList: IResourceMethod<{action: string}, IFeedback[]>;

  /**
   * Path: /
   * Method: GET
   * Удаление сообщения
   */
  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  deleteMessage: IResourceMethod<{action: string, id: number}, boolean>;
}

