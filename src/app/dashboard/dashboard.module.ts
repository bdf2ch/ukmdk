import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MachinesComponent } from './components/machines/machines.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardGuard } from './guards/dashboard.guard';
import { MachinesGuard } from './guards/machines.guard';
import { FeedbackGuard } from './guards/feedback.guard';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NewMachineDialogComponent } from './components/new-machine-dialog/new-machine-dialog.component';
import { DeleteMachineDialogComponent } from './components/delete-machine-dialog/delete-machine-dialog.component';
import { UploadPhotoDialogComponent } from './components/upload-photo-dialog/upload-photo-dialog.component';
import { EditMachineDialogComponent } from './components/edit-machine-dialog/edit-machine-dialog.component';
import { DeleteFeedbackDialogComponent } from './components/delete-feedback-dialog/delete-feedback-dialog.component';


@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    MachinesComponent,
    FeedbackComponent,
    NewMachineDialogComponent,
    DeleteMachineDialogComponent,
    UploadPhotoDialogComponent,
    EditMachineDialogComponent,
    DeleteFeedbackDialogComponent
  ],
  providers: [
    DashboardGuard,
    MachinesGuard,
    FeedbackGuard
  ],
  entryComponents: [
    NewMachineDialogComponent,
    DeleteMachineDialogComponent,
    UploadPhotoDialogComponent,
    EditMachineDialogComponent,
    DeleteFeedbackDialogComponent
  ]
})
export class DashboardModule {}
