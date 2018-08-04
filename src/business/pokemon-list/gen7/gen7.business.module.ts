import { NgModule } from '@angular/core';
import {Gen7Component} from './gen7.component';
import { SharedModule } from '../../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Gen7Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Gen7Component
  ]
})
export class Gen7BusinessModule { }
