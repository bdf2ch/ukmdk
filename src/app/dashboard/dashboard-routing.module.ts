import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MachinesComponent } from './components/machines/machines.component';
import { DashboardGuard } from './guards/dashboard.guard';
import { MachinesGuard } from './guards/machines.guard';
import { FeedbackGuard } from './guards/feedback.guard';
import { FeedbackComponent } from './components/feedback/feedback.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivateChild: [
      DashboardGuard
    ],
    children: [
      {
        path: '',
        redirectTo: 'machines',
        pathMatch: 'full'
      },
      {
        path: 'machines',
        component: MachinesComponent,
        resolve: [
          //MachinesGuard
        ]
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        resolve: [
          //FeedbackGuard
        ]
      }
    ]
  },
  /*
  {
    path: '**',
    redirectTo: ''
  }
  */
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
