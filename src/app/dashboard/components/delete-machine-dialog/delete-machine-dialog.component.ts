import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MachinesService } from '../../services/machines.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-machine-dialog',
  templateUrl: './delete-machine-dialog.component.html',
  styleUrls: ['./delete-machine-dialog.component.css']
})
export class DeleteMachineDialogComponent implements OnInit {

  constructor(private readonly dialogRef: MatDialogRef<DeleteMachineDialogComponent>,
              public readonly machines: MachinesService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {}

  deleteMachine() {
    console.log(this.data);
    this.machines.deleteMachine(this.data.machine)
      .subscribe(() => {
        this.dialogRef.close();
        this.machines.fetchList().subscribe();
      });
  }

  cancel() {
    this.dialogRef.close();
  }

}
