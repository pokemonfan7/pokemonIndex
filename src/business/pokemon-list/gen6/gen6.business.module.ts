import { NgModule } from '@angular/core'
import {Gen6Component} from './gen6.component'
import {SharedModule} from '../../../shared/shared.module'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    component: Gen6Component
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Gen6Component
  ]
})
export class Gen6BusinessModule { }
