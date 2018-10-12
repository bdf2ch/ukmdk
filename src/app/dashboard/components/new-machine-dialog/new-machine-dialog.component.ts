import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MachinesService } from '../../services/machines.service';
import { MatDialogRef } from '@angular/material';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-new-machine-dialog',
  templateUrl: './new-machine-dialog.component.html',
  styleUrls: ['./new-machine-dialog.component.css']
})
export class NewMachineDialogComponent implements OnInit {
  public machine: Machine;
  public newMachineForm: FormGroup;
  public photo: File | null;

  constructor(private readonly dialogRef: MatDialogRef<NewMachineDialogComponent>,
              public readonly machines: MachinesService) {
    this.machine = new Machine();
    this.newMachineForm = new FormGroup({
      title: new FormControl(this.machine.title, Validators.required),
      description: new FormControl(this.machine.description),
      cost: new FormControl(this.machine.cost, Validators.required),
      rent: new FormControl(this.machine.rent, Validators.required)
    });
    this.photo = null;
  }

  ngOnInit() {}

  closeNewMachineDialog() {
    this.dialogRef.close();
    this.machine = new Machine();
    this.newMachineForm.reset();
  }

  onChangePhoto(data: any) {
    console.log(data);
    this.photo = data.target.files[0];
    console.log('photo', this.photo);
  }

  addMachine() {
    this.machines.addMachine(this.machine, this.photo)
      .subscribe(() => {
        this.dialogRef.close();
        this.machines.fetchList()
          .subscribe();
      });
  }
}
