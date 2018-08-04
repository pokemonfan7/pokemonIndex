import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule,
    SharedModule,
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomePageBusinessModule { }
