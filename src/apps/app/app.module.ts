import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'
import { PagesModule } from './pages/pages.module'
import { CoreModule } from '../../core/core.module'
import { SharedModule } from '../../shared/shared.module'

registerLocaleData(zh)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
