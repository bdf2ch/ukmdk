import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResourceParams, ResourceHandler, ResourceAction, ResourceRequestMethod, IResourceMethod, Resource } from '@ngx-resource/core';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: environment.apiUrl
})
export class MachinesResource extends Resource {

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
  getList: IResourceMethod<void, Machine[]>;
}

