import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MachinesService } from '../../services/machines.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-edit-machine-dialog',
  templateUrl: './edit-machine-dialog.component.html',
  styleUrls: ['./edit-machine-dialog.component.css']
})
export class EditMachineDialogComponent implements OnInit {
  public editMachineForm: FormGroup;

  constructor(private readonly dialogRef: MatDialogRef<EditMachineDialogComponent>,
              public readonly machines: MachinesService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.editMachineForm = new FormGroup({
      title: new FormControl(this.data.machine.title, Validators.required),
      description: new FormControl(this.data.machine.description, Validators.required),
      cost: new FormControl(this.data.machine.cost, Validators.required),
      rent: new FormControl(this.data.machine.rent, Validators.required),
      is_enabled: new FormControl(this.data.machine.isEnabled)
    });
  }

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }

  editMachine() {
    const machine = new Machine({
      id: this.data.machine.id,
      title: this.editMachineForm.controls['title'].value,
      description: this.editMachineForm.controls['description'].value,
      cost: this.editMachineForm.controls['cost'].value,
      rent: this.editMachineForm.controls['rent'].value,
      is_enabled: this.editMachineForm.controls['is_enabled'].value === true ? 1 : 0,
      photo_url: ''
    });
    this.machines.editMachine(machine)
      .subscribe(() => {
        this.cancel();
        this.machines.fetchList().subscribe();
      });
  }

}
