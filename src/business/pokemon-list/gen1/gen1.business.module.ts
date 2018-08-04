import { NgModule } from '@angular/core';
import {Gen1Component} from './gen1.component';
import {SharedModule} from '../../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Gen1Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Gen1Component
  ]
})
export class Gen1BusinessModule { }
