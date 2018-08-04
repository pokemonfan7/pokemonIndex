import { NgModule } from '@angular/core';
import {Gen3Component} from './gen3.component';
import {SharedModule} from '../../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Gen3Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Gen3Component
  ]
})
export class Gen3BusinessModule { }
