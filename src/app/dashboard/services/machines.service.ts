import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MachinesResource } from '../resources/machines.resource';

@Injectable({
  providedIn: 'root'
})
export class MachinesService {
  private fetchingMachinesInProgress: BehaviorSubject<boolean>;
  private addingMachineInProgress: BehaviorSubject<boolean>;
  private editingMachineInProgress: BehaviorSubject<boolean>;
  private deletingMachineInProgress: BehaviorSubject<boolean>;

  constructor(private readonly resource: MachinesResource) {
    this.fetchingMachinesInProgress = new BehaviorSubject(false);
    this.addingMachineInProgress = new BehaviorSubject(false);
    this.editingMachineInProgress = new BehaviorSubject(false);
    this.deletingMachineInProgress = new BehaviorSubject(false);
  }
}
