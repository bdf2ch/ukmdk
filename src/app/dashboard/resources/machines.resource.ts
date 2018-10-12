import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ResourceParams, ResourceHandler, ResourceAction, ResourceRequestMethod, IResourceMethod, Resource } from '@ngx-resource/core';
import { IMachine } from '../interfaces/machine.interface';

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
   * Получение списка спецтранспорта
   */
  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  getList: IResourceMethod<{action: string}, IMachine[]>;

  /**
   * Path: /
   * Method: GET
   * Удаление спецтранспорта
   */
  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  deleteMachine: IResourceMethod<{action: string, id: number}, void>;
}

