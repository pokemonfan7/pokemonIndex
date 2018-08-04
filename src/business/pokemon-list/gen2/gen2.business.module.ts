import { NgModule } from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Gen2Component} from './gen2.component';

export const routes: Routes = [
  {
    path: '',
    component: Gen2Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Gen2Component
  ]
})
export class Gen2BusinessModule { }
