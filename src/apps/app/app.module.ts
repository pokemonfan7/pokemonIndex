import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../../business/home-page/home-page.component';
import { NewsComponent } from '../../business/news/news.component';
import { PageNotFindComponent } from '../../business/page-not-find/page-not-find.component';
import { PokemonDetailComponent } from '../../business/pokemon-detail/pokemon-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { PokemonListComponent } from '../../business/pokemon-list/pokemon-list.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { Gen1Component } from '../../business/pokemon-list/gen1/gen1.component';
import { Gen2Component } from '../../business/pokemon-list/gen2/gen2.component';
import { Gen3Component } from '../../business/pokemon-list/gen3/gen3.component';
import { Gen4Component } from '../../business/pokemon-list/gen4/gen4.component';
import { Gen5Component } from '../../business/pokemon-list/gen5/gen5.component';
import { Gen6Component } from '../../business/pokemon-list/gen6/gen6.component';
import { Gen7Component } from '../../business/pokemon-list/gen7/gen7.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFindComponent,
    HomePageComponent,
    NewsComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    Gen1Component,
    Gen2Component,
    Gen3Component,
    Gen4Component,
    Gen5Component,
    Gen6Component,
    Gen7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    SharedModule,
    CoreModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
