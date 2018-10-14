import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { MachinesResource } from '../resources/machines.resource';
import { Machine } from '../models/machine.model';
import { finalize, map } from 'rxjs/operators';
import { IMachine } from '../interfaces/machine.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {
  private machines: BehaviorSubject<Machine[]>;
  private fetchingMachinesInProgress: BehaviorSubject<boolean>;
  private addingMachineInProgress: BehaviorSubject<boolean>;
  private editingMachineInProgress: BehaviorSubject<boolean>;
  private deletingMachineInProgress: BehaviorSubject<boolean>;
  private uploadingPhotoInProgress: BehaviorSubject<boolean>;

  constructor(private readonly http: HttpClient,
              private readonly resource: MachinesResource) {
    this.machines = new BehaviorSubject<Machine[]>([
      new Machine({
        id: 1,
        title: 'asdasd',
        description: 'asdasd dasda asdas sdasda asdas asdas ',
        cost: '125 000 рублей',
        rent: '5000 рублей в сутки',
        photo_url: '',
        is_enabled: 1
      }),
      new Machine({
        id: 1,
        title: 'asdasd',
        description: 'asdasd dasda asdas sdasda asdas asdas ',
        cost: '125 000 рублей',
        rent: '5000 рублей в сутки',
        photo_url: '',
        is_enabled: 1
      }),
      new Machine({
        id: 1,
        title: 'asdasd',
        description: 'asdasd dasda asdas sdasda asdas asdas ',
        cost: '125 000 рублей',
        rent: '5000 рублей в сутки',
        photo_url: '',
        is_enabled: 1
      }),
      new Machine({
        id: 1,
        title: 'asdasd',
        description: 'asdasd dasda asdas sdasda asdas asdas ',
        cost: '125 000 рублей',
        rent: '5000 рублей в сутки',
        photo_url: '',
        is_enabled: 1
      }),
      new Machine({
        id: 1,
        title: 'asdasd',
        description: 'asdasd dasda asdas sdasda asdas asdas ',
        cost: '125 000 рублей',
        rent: '5000 рублей в сутки',
        photo_url: '',
        is_enabled: 1
      }),
      new Machine({
        id: 1,
        title: 'asdasd',
        description: 'asdasd dasda asdas sdasda asdas asdas ',
        cost: '125 000 рублей',
        rent: '5000 рублей в сутки',
        photo_url: '',
        is_enabled: 1
      })
    ]);
    this.fetchingMachinesInProgress = new BehaviorSubject(false);
    this.addingMachineInProgress = new BehaviorSubject(false);
    this.editingMachineInProgress = new BehaviorSubject(false);
    this.deletingMachineInProgress = new BehaviorSubject(false);
    this.uploadingPhotoInProgress = new BehaviorSubject(false);
  }

  fetchList(): Observable<Machine[]> {
    this.fetchingMachinesInProgress.next(true);
    return from(this.resource.getList({action: 'getMachinesList'}))
      .pipe(
        map((result: IMachine[]) => {
          console.log('result', result);
          const machines: Machine[] = [];
          result.forEach((item: IMachine) => {
            machines.push(new Machine(item));
          });
          this.machines.next(machines);
          console.log(this.machines.value);
          return this.machines.value;
        }),
        finalize(() => {
          this.fetchingMachinesInProgress.next(false);
        })
      );
  }

  addMachine(machine: Machine, photo: File): Observable<Machine> {
    console.log(machine);
    const formData: FormData = new FormData();
    formData.append('action', 'addMachine');
    formData.append('title', machine.title);
    formData.append('description', machine.description);
    formData.append('cost', machine.cost);
    formData.append('rent', machine.rent);
    formData.append('photo', photo);

    this.addingMachineInProgress.next(true);
    return this.http.post(environment.apiUrl, formData)
      .pipe(
        map((item: IMachine) => {
          return new Machine(item);
        }),
        finalize(() => {
          this.addingMachineInProgress.next(false);
        })
      );
  }

  editMachine(machine: Machine): Observable<Machine> {
    this.editingMachineInProgress.next(true);
    return from(this.resource.editMachine({action: 'editMachine', id: machine.id, title: machine.title, description: machine.description, cost: machine.cost, rent: machine.rent, is_enabled: machine.isEnabled ? 1 : 0}))
      .pipe(
        map((item: IMachine) => {
          return new Machine(item);
        }),
        finalize(() => {
          this.editingMachineInProgress.next(false);
        })
      );
  }

  deleteMachine(machine: Machine): Observable<void> {
    this.deletingMachineInProgress.next(true);
    return from(this.resource.deleteMachine({action: 'deleteMachine', id: machine.id}))
      .pipe(
        finalize(() => {
          this.deletingMachineInProgress.next(false);
        })
      );
  }

  uploadPhoto(id: number, photo: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('action', 'uploadMachinePhoto');
    formData.append('id', String(id));
    formData.append('photo', photo);

    this.uploadingPhotoInProgress.next(true);
    return this.http.post(environment.apiUrl, formData)
      .pipe(
        map((url: string) => {
          return url;
        }),
        finalize(() => {
          this.uploadingPhotoInProgress.next(false);
        })
      );
  }

  getList(): Observable<Machine[]> {
    return this.machines.asObservable();
  }

  addingInProgress(): Observable<boolean> {
    return this.addingMachineInProgress.asObservable();
  }

  deletingInProgress(): Observable<boolean> {
    return this.deletingMachineInProgress.asObservable();
  }

  editingInProgress(): Observable<boolean> {
    return this.editingMachineInProgress.asObservable();
  }

  uploadingInProgress(): Observable<boolean> {
    return this.uploadingPhotoInProgress.asObservable();
  }
}
