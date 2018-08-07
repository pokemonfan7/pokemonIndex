import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomePageBusinessModule { }
