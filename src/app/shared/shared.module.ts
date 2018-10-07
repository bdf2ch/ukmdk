import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
