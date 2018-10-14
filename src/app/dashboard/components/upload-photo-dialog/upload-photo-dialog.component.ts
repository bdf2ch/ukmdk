import { Component, Inject, OnInit } from '@angular/core';
import { MachinesService } from '../../services/machines.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-upload-photo-dialog',
  templateUrl: './upload-photo-dialog.component.html',
  styleUrls: ['./upload-photo-dialog.component.css']
})
export class UploadPhotoDialogComponent implements OnInit {
  public photo: File | null;

  constructor(private readonly dialogRef: MatDialogRef<UploadPhotoDialogComponent>,
              public readonly machines: MachinesService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.photo = null;
  }

  ngOnInit() {}

  onChangePhoto(event: any) {
    console.log(event.target.files[0]);
    this.photo = event.target.files[0];
  }

  cancel() {
    this.dialogRef.close();
    this.photo = null;
  }

  upload() {
    console.log(this.data);
    this.machines.uploadPhoto(this.data.machine.id, this.photo)
      .subscribe((url: string) => {
        console.log('url', url);
        this.data.machine.photo = url;
        this.cancel();
      });
  }
}
