import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MachinesComponent } from './components/machines/machines.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    MachinesComponent
  ]
})
export class DashboardModule {}
