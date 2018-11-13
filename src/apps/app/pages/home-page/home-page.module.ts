import { NgModule } from '@angular/core'
import {HomePageRoutingModule} from './home-page-routing.module'
import {HomePageBusinessModule} from '../../../../business/home-page/home-page.business.module'
import {NewsBusinessModule} from '../../../../business/news/news.business.module'

@NgModule({
  imports: [
    HomePageRoutingModule,
    HomePageBusinessModule,
    NewsBusinessModule
  ],
  declarations: [
  ]
})
export class HomePageModule { }
