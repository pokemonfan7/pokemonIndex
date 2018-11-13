import { NgModule } from '@angular/core'
import {Gen5Component} from './gen5.component'
import {SharedModule} from '../../../shared/shared.module'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    component: Gen5Component
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Gen5Component
  ]
})
export class Gen5BusinessModule { }
