import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewMachineDialogComponent } from '../new-machine-dialog/new-machine-dialog.component';
import { MachinesService } from '../../services/machines.service';
import { DeleteMachineDialogComponent } from '../delete-machine-dialog/delete-machine-dialog.component';
import { Machine } from '../../models/machine.model';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.css']
})
export class MachinesComponent implements OnInit {

  constructor(private readonly dialog: MatDialog,
              public readonly machines: MachinesService) {}

  ngOnInit() {
  }

  openNewMachineDialog() {
    this.dialog.open(NewMachineDialogComponent, {
      width: '400px'
    });
  }

  openDeletemachineDialog(machine: Machine) {
    this.dialog.open(DeleteMachineDialogComponent, {
      width: '450px',
      data: {
        machine: machine
      }
    });
  }
}
