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
    this.newMachineForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
      cost: new FormControl(null, Validators.required),
      rent: new FormControl(null, Validators.required)
    });
    this.photo = null;
  }

  ngOnInit() {}

  closeNewMachineDialog() {
    this.dialogRef.close();
    this.newMachineForm.reset();
  }

  onChangePhoto(data: any) {
    console.log(data);
    this.photo = data.target.files[0];
    console.log('photo', this.photo);
  }

  addMachine() {
    const machine = new Machine({
      id: 0,
      title: this.newMachineForm.controls['title'].value,
      description: this.newMachineForm.controls['description'].value,
      cost: this.newMachineForm.controls['cost'].value,
      rent: this.newMachineForm.controls['rent'].value,
      is_enabled: 1,
      photo_url: ''
    });
    this.machines.addMachine(machine, this.photo)
      .subscribe(() => {
        this.dialogRef.close();
        this.machines.fetchList()
          .subscribe();
      });
  }
}
