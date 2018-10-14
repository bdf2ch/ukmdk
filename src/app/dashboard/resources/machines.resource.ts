import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  IResourceMethod,
  Resource,
  ResourceAction,
  ResourceHandler,
  ResourceParams,
  ResourceQueryMappingMethod,
  ResourceRequestMethod
} from '@ngx-resource/core';
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
   * Добавление спецтранспорта
   */
  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  addMachine: IResourceMethod<{action: string, machine: IMachine}, IMachine>;

  /**
   * Path: /
   * Method: GET
   * Редактирование спецтранспорта
   */
  @ResourceAction({
    path: '/',
    method: ResourceRequestMethod.Get,
    withCredentials: true
  })
  editMachine: IResourceMethod<{action: string, id: number, title: string, description: string, cost: string, rent: string, is_enabled: number}, IMachine>;

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

